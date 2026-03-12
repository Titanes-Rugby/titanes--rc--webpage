import { afterEach, describe, expect, it, vi } from 'vitest';

import { dateFormat, timeAgo } from '@/utils/date';

describe('date utils', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('formats dates using provided masks', () => {
    expect(dateFormat('2026-01-01', 'YYYY-MM-DD')).toBe('2026-01-01');
  });

  it('returns relative time labels', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-12T12:00:00Z'));

    const result = timeAgo('2026-03-11T12:00:00Z');
    expect(result).toMatch(/day/);
  });
});
