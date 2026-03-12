import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import CountUpStat from '@/components/CountUpStat';

const mocks = vi.hoisted(() => ({
  useInView: vi.fn(),
  useReducedMotion: vi.fn(),
}));

vi.mock('framer-motion', () => ({
  useInView: mocks.useInView,
  useReducedMotion: mocks.useReducedMotion,
}));

describe('<CountUpStat />', () => {
  it('keeps zero value when not in view', () => {
    mocks.useInView.mockReturnValue(false);
    mocks.useReducedMotion.mockReturnValue(false);
    render(<CountUpStat end={20} label="Partidos" suffix="+" />);
    expect(screen.getByText('0+')).toBeInTheDocument();
  });

  it('jumps to end value when reduced motion is enabled', () => {
    mocks.useInView.mockReturnValue(true);
    mocks.useReducedMotion.mockReturnValue(true);
    render(<CountUpStat end={45} label="Partidos" />);
    expect(screen.getByText('45')).toBeInTheDocument();
  });

  it('animates with requestAnimationFrame when in view', () => {
    mocks.useInView.mockReturnValue(true);
    mocks.useReducedMotion.mockReturnValue(false);
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(performance.now() + 2000);
      return 1;
    });

    render(<CountUpStat end={12} label="Trys" durationMs={800} />);
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(rafSpy).toHaveBeenCalled();
    rafSpy.mockRestore();
  });

  it('requests another animation frame while progress is below 1', () => {
    mocks.useInView.mockReturnValue(true);
    mocks.useReducedMotion.mockReturnValue(false);

    let rafCalls = 0;
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCalls += 1;
      if (rafCalls === 1) {
        cb(performance.now() + 10);
      }
      return rafCalls;
    });

    render(<CountUpStat end={100} label="Ramas" durationMs={1000} />);
    expect(rafCalls).toBeGreaterThan(1);
    rafSpy.mockRestore();
  });
});
