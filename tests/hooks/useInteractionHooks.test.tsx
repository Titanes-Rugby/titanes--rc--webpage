import { fireEvent, render } from '@testing-library/react';
import { useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useScrollLock } from '@/hooks/useScrollLock';

describe('interaction hooks', () => {
  it('runs escape handler only when active', () => {
    const onEscape = vi.fn();
    const Harness = ({ active }: { active: boolean }) => {
      useEscapeKey(onEscape, active);
      return <div>ready</div>;
    };

    const { rerender } = render(<Harness active />);
    fireEvent.keyDown(window, { key: 'Enter' });
    fireEvent.keyDown(window, { key: 'Escape' });
    rerender(<Harness active={false} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    fireEvent.keyDown(window, { key: 'Enter' });
    expect(onEscape).toHaveBeenCalledTimes(1);
  });

  it('locks body scroll and detects outside clicks', () => {
    const onOutside = vi.fn();
    const Harness = () => {
      const ref = useRef<HTMLDivElement>(null);
      useLockBodyScroll(true);
      useOnClickOutside(ref, onOutside);
      return (
        <div>
          <div ref={ref}>inside</div>
          <button type="button">outside</button>
        </div>
      );
    };

    const { getByText, unmount } = render(<Harness />);
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.mouseDown(getByText('inside'));
    fireEvent.mouseDown(getByText('outside'));
    expect(onOutside).toHaveBeenCalledTimes(1);
    unmount();
    expect(document.body.style.overflow).toBe('visible');
  });

  it('cycles focus on tab and toggles overflow-hidden class on hover', () => {
    const Harness = () => {
      const ref = useRef<HTMLDivElement>(null);
      useFocusTrap(ref, true);
      useScrollLock(ref);
      return (
        <div ref={ref}>
          <button type="button">first</button>
          <button type="button">last</button>
        </div>
      );
    };

    const { getByText } = render(<Harness />);
    const first = getByText('first');
    const last = getByText('last');

    last.focus();
    fireEvent.keyDown(last, { key: 'Tab' });
    expect(document.activeElement).toBe(first);

    first.focus();
    fireEvent.keyDown(first, { key: 'Tab' });
    expect(document.activeElement).toBe(first);

    fireEvent.keyDown(first, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(last);

    fireEvent.keyDown(last, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(last);

    fireEvent.keyDown(first, { key: 'Enter' });
    expect(document.activeElement).toBe(last);

    fireEvent.mouseEnter(first.parentElement as HTMLElement);
    expect(document.body.classList.contains('overflow-hidden')).toBe(true);
    fireEvent.mouseLeave(first.parentElement as HTMLElement);
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });

  it('keeps behavior safe when hooks are inactive or refs are null', () => {
    document.body.style.overflow = '';
    const Harness = () => {
      const nullRef = useRef<HTMLDivElement>(null);
      useFocusTrap(nullRef, false);
      useScrollLock(nullRef);
      useLockBodyScroll(false);
      return <div>noop</div>;
    };

    render(<Harness />);
    expect(document.body.style.overflow).toBe('');
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });
});
