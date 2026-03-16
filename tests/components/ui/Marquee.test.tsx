import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { HTMLAttributes } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Marquee from '@/components/ui/Marquee';

const setX = vi.fn();
const animationFrameCallbacks: Array<(time: number, delta: number) => void> = [];

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  useMotionValue: () => ({ set: setX }),
  useAnimationFrame: (cb: (time: number, delta: number) => void) => {
    animationFrameCallbacks.push(cb);
  },
}));

describe('<Marquee />', () => {
  beforeEach(() => {
    setX.mockClear();
    animationFrameCallbacks.length = 0;
  });

  it('renders duplicated content rows and optional edge fade', () => {
    render(<Marquee items={['A', 'B']} renderItem={(item) => <span>{item}</span>} />);

    expect(screen.getAllByText('A')).toHaveLength(2);
    expect(screen.getAllByText('B')).toHaveLength(2);
    expect(document.querySelectorAll('.bg-gradient-to-r').length).toBe(1);
    expect(document.querySelectorAll('.bg-gradient-to-l').length).toBe(1);
  });

  it('hides edge fade when disabled and pauses movement on hover/focus', async () => {
    const rectSpy = vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 120,
      height: 20,
      x: 0,
      y: 0,
      top: 0,
      right: 120,
      bottom: 20,
      left: 0,
      toJSON: () => ({}),
    } as DOMRect);

    const { container } = render(
      <Marquee
        items={['X']}
        speed={0.1}
        showEdgeFade={false}
        renderItem={(item, index) => (
          <span>
            {item}-{index}
          </span>
        )}
      />,
    );

    expect(document.querySelector('.bg-gradient-to-r')).toBeNull();
    expect(document.querySelector('.bg-gradient-to-l')).toBeNull();

    const root = container.firstElementChild as HTMLElement;
    await waitFor(() => {
      animationFrameCallbacks.at(-1)?.(0, 16);
      expect(setX).toHaveBeenCalled();
    });

    const callsBeforePause = setX.mock.calls.length;
    fireEvent.mouseEnter(root);
    animationFrameCallbacks.at(-1)?.(0, 16);
    expect(setX.mock.calls.length).toBe(callsBeforePause);

    fireEvent.mouseLeave(root);
    animationFrameCallbacks.at(-1)?.(0, 16);
    expect(setX.mock.calls.length).toBeGreaterThan(callsBeforePause);

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 20 });
    fireEvent.scroll(window);
    animationFrameCallbacks.at(-1)?.(0, 16);
    const valueAfterDown = setX.mock.calls.at(-1)?.[0] as number;

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    fireEvent.scroll(window);
    animationFrameCallbacks.at(-1)?.(0, 16);
    const valueAfterUp = setX.mock.calls.at(-1)?.[0] as number;
    expect(valueAfterDown).not.toBe(valueAfterUp);

    fireEvent.focus(root);
    fireEvent.blur(root);
    rectSpy.mockRestore();
  });

  it('keeps loop width at zero when measurement width is missing', () => {
    const rectSpy = vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: undefined,
      height: 20,
      x: 0,
      y: 0,
      top: 0,
      right: 0,
      bottom: 20,
      left: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(<Marquee items={['Z']} renderItem={(item) => <span>{item}</span>} />);
    animationFrameCallbacks.at(-1)?.(0, 16);

    expect(setX).not.toHaveBeenCalled();
    rectSpy.mockRestore();
  });
});
