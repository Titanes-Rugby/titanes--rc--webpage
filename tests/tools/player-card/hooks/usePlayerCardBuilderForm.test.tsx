import { StrictMode } from 'react';
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { playerCardBuilderDefaults } from '@/pages/tools/player-card/playerCardBuilder.config';
import { usePlayerCardBuilderForm } from '@/pages/tools/player-card/hooks/usePlayerCardBuilderForm';

describe('usePlayerCardBuilderForm', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/tools/player-card');
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('hydrates values from URL and syncs form changes back to history', async () => {
    window.history.pushState({}, '', '/tools/player-card?name=Carlos&position=Wing');
    const replaceStateSpy = vi.spyOn(window.history, 'replaceState');
    const { result } = renderHook(() => usePlayerCardBuilderForm());

    expect(result.current.getValues('name')).toBe('Carlos');
    expect(result.current.getValues('position')).toBe('Wing');

    act(() => result.current.setValue('nickname', 'Nico'));
    await waitFor(() => expect(replaceStateSpy).toHaveBeenCalled());

    const lastUrl = replaceStateSpy.mock.calls.at(-1)?.[2];
    expect(lastUrl).toContain('/tools/player-card?');
    expect(lastUrl).toContain('nickname=Nico');
  });

  it('validates image file type and updates image src for valid files', () => {
    const createObjectUrlSpy = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:avatar-preview');
    const { result } = renderHook(() => usePlayerCardBuilderForm());

    act(() => result.current.onImageFileChange(new File(['x'], 'doc.txt', { type: 'text/plain' })));
    expect(result.current.uploadError).toMatch(/archivo de imagen válido/i);

    act(() => result.current.onImageFileChange(new File(['x'], 'avatar.png', { type: 'image/png' })));
    expect(createObjectUrlSpy).toHaveBeenCalledTimes(1);
    expect(result.current.uploadError).toBe('');
    expect(result.current.getValues('imageSrc')).toBe('blob:avatar-preview');
  });

  it('applies presets and handles clipboard success/error states', async () => {
    vi.useFakeTimers();
    const writeText = vi.spyOn(navigator.clipboard, 'writeText');
    const { result } = renderHook(() => usePlayerCardBuilderForm());

    act(() => result.current.onSelectPreset('juveniles'));
    expect(result.current.getValues('name')).toBe('Mateo');
    expect(result.current.getValues('yearsInTeam')).toBe('3');

    await act(async () => {
      await result.current.copyShareLink();
    });
    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('/tools/player-card?'));
    expect(result.current.shareStatus).toBe('copied');

    act(() => {
      vi.runAllTimers();
    });
    expect(result.current.shareStatus).toBe('idle');

    writeText.mockRejectedValueOnce(new Error('clipboard denied'));
    await act(async () => {
      await result.current.copyShareLink();
    });
    expect(result.current.shareStatus).toBe('error');
    vi.useRealTimers();
  });

  it('ignores unknown presets and empty image uploads', () => {
    const { result } = renderHook(() => usePlayerCardBuilderForm());
    const before = result.current.getValues();

    act(() => result.current.onSelectPreset('unknown'));
    expect(result.current.getValues()).toEqual(before);

    act(() => result.current.onImageFileChange(undefined));
    expect(result.current.getValues()).toEqual(before);
    expect(result.current.getValues('name')).toBe(playerCardBuilderDefaults.name);
  });

  it('copies share link without query string when values are empty', async () => {
    const writeText = vi.spyOn(navigator.clipboard, 'writeText');
    const { result } = renderHook(() => usePlayerCardBuilderForm());

    act(() => {
      result.current.reset({
        id: '',
        position: '',
        name: '',
        nickname: '',
        imageSrc: '',
        height: '',
        weight: '',
        speed: '',
        birthYear: '',
        reach: '',
        power: '',
        yearsInTeam: '',
        teamName: '',
      });
    });

    await act(async () => {
      await result.current.copyShareLink();
    });

    expect(writeText).toHaveBeenCalledWith(`${window.location.origin}/tools/player-card`);
  });

  it('supports strict mode rerenders without reinitializing from search', async () => {
    window.history.pushState({}, '', '/tools/player-card?name=StrictMode');
    const replaceStateSpy = vi.spyOn(window.history, 'replaceState');
    const { result } = renderHook(() => usePlayerCardBuilderForm(), { wrapper: StrictMode });

    expect(result.current.getValues('name')).toBe('StrictMode');

    act(() => result.current.setValue('nickname', 'SM'));
    await waitFor(() => expect(replaceStateSpy).toHaveBeenCalled());
    expect(result.current.getValues('name')).toBe('StrictMode');
  });
});
