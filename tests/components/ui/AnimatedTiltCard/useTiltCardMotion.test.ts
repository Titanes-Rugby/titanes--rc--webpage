import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('framer-motion', () => {
  const createMotionValue = (initial = 0) => {
    let value = initial;
    return {
      get: () => value,
      set: (next: number) => {
        value = next;
      },
    };
  };

  return {
    useMotionValue: (initial = 0) => createMotionValue(initial),
    useSpring: (motionValue: { get: () => number }) => motionValue,
    useTransform: (...args: any[]) => {
      if (typeof args[0] === 'function') {
        return { get: args[0] };
      }
      return createMotionValue(0);
    },
    useMotionTemplate: () => 'gradient',
  };
});

const scrollTiltXGet = vi.fn(() => 2);
const scrollTiltYGet = vi.fn(() => -3);

vi.mock('@/components/ui/AnimatedTiltCard/useScrollTilt', () => ({
  useScrollTilt: () => ({
    scrollTiltX: { get: scrollTiltXGet },
    scrollTiltY: { get: scrollTiltYGet },
  }),
}));

import { useTiltCardMotion } from '@/components/ui/AnimatedTiltCard/useTiltCardMotion';

describe('useTiltCardMotion', () => {
  it('updates and resets rotation from mouse events without scroll tilt', () => {
    const { result } = renderHook(() => useTiltCardMotion(false));

    const currentTarget = {
      getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 }),
    };

    act(() => {
      result.current.onMouseMove({ currentTarget, clientX: 100, clientY: 0 } as any);
    });

    expect(result.current.rotateY.get()).toBeCloseTo(7, 4);
    expect(result.current.rotateX.get()).toBeCloseTo(6, 4);

    act(() => {
      result.current.onMouseLeave();
    });

    expect(result.current.rotateY.get()).toBeCloseTo(0, 4);
    expect(result.current.rotateX.get()).toBeCloseTo(0, 4);
  });

  it('adds scroll tilt values when enabled', () => {
    const { result } = renderHook(() => useTiltCardMotion(true));

    const currentTarget = {
      getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 }),
    };

    act(() => {
      result.current.onMouseMove({ currentTarget, clientX: 100, clientY: 0 } as any);
    });

    expect(result.current.rotateX.get()).toBeCloseTo(8, 4);
    expect(result.current.rotateY.get()).toBeCloseTo(4, 4);
  });
});
