import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useIsMobile } from '@/hooks/useMobile';
import { useVisibleWithScroll } from '@/hooks/useVisibleWithScroll';

describe('useMobile and useVisibleWithScroll', () => {
  it('detects mobile width and updates on media-query change', () => {
    const listeners: Array<() => void> = [];
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
        media: '',
        onchange: null,
        addEventListener: (_: string, cb: () => void) => listeners.push(cb),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 500 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1100 });
    act(() => listeners[0]?.());
    expect(result.current).toBe(false);
  });

  it('tracks navbar visibility while scrolling up and down', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    const { result } = renderHook(() => useVisibleWithScroll(10));
    expect(result.current.atTop).toBe(true);
    expect(result.current.visible).toBe(true);

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 80 });
    act(() => window.dispatchEvent(new Event('scroll')));
    expect(result.current.atTop).toBe(false);
    expect(result.current.visible).toBe(false);

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 30 });
    act(() => window.dispatchEvent(new Event('scroll')));
    expect(result.current.visible).toBe(true);
  });
});
