import { afterEach, describe, expect, it, vi } from 'vitest';

import { addDomEvent } from '@/utils/addDomEvent';
import { formatBytes } from '@/utils/humanize';
import { memo } from '@/utils/memo';
import { removeEmptyValues } from '@/utils/object';
import { delay, calculateReadingTime } from '@/utils/time';
import { decodeState, encodeState } from '@/utils/urlSync';

describe('core utils', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('handles memoization and object cleanup', () => {
    const sum = vi.fn((a: number, b: number) => a + b);
    const memoSum = memo(sum);

    expect(memoSum(2, 3)).toBe(5);
    expect(memoSum(2, 3)).toBe(5);
    expect(sum).toHaveBeenCalledTimes(1);

    expect(removeEmptyValues({ a: 1, b: undefined, c: null })).toEqual({ a: 1, c: null });
    expect(removeEmptyValues([])).toEqual([]);
  });

  it('handles bytes formatting, delays and reading time', async () => {
    expect(formatBytes(0)).toBe('0 Bytes');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1024, -1)).toBe('1 KB');
    expect(calculateReadingTime('<p>one two three</p>')).toBe('1 min read');
    expect(calculateReadingTime('   ')).toBe('0 min read');

    vi.useFakeTimers();
    const promise = delay(25);
    await vi.advanceTimersByTimeAsync(25);
    await expect(promise).resolves.toBeUndefined();
  });

  it('encodes and decodes state and dom listeners', () => {
    const state = { team: 'Titanes', page: 2 };
    const encoded = encodeState(state);
    expect(decodeState(encoded)).toEqual(state);
    expect(decodeState('not-valid')).toEqual({});

    const target = new EventTarget();
    const handler = vi.fn();
    const remove = addDomEvent(target, 'ping', handler as EventListener);
    target.dispatchEvent(new Event('ping'));
    expect(handler).toHaveBeenCalledTimes(1);
    remove();
    target.dispatchEvent(new Event('ping'));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
