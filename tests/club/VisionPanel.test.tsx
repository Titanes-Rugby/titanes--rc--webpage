import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import VisionPanel from '@/pages/club/components/VisionPanel';

describe('<VisionPanel />', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('runs fade transition and rotates images over time', () => {
    vi.useFakeTimers();
    render(<VisionPanel />);

    const currentImage = screen.getByRole('img', { name: /Foto equipo$/i });
    const nextImage = screen.getByRole('img', { name: /Foto equipo siguiente/i });

    expect(currentImage.className).toContain('opacity-100');
    expect(nextImage.className).toContain('opacity-0');

    act(() => {
      vi.advanceTimersByTime(4200);
    });
    expect(currentImage.className).toContain('opacity-0');
    expect(nextImage.className).toContain('opacity-100');

    act(() => {
      vi.advanceTimersByTime(450);
    });
    expect((screen.getByRole('img', { name: /Foto equipo$/i }) as HTMLImageElement).src).toContain('fecha1-208.JPG');
  });

  it('cleans pending timers on unmount', () => {
    vi.useFakeTimers();
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval');

    const { unmount } = render(<VisionPanel />);
    act(() => {
      vi.advanceTimersByTime(4200);
    });
    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
