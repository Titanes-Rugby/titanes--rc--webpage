import { afterEach, describe, expect, it, vi } from 'vitest';

import { dateFormat, getAgeFromBirthDate, timeAgo } from '@/utils/date';

describe('date utils', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('formats dates using provided masks', () => {
    expect(dateFormat('2026-01-01', 'YYYY-MM-DD')).toBe('2026-01-01');
    expect(dateFormat('2026-01-01T05:12:00Z')).toMatch(/\d{2}-\d{2}-\d{4}/);
  });

  it('returns relative time labels', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-12T12:00:00Z'));

    const result = timeAgo('2026-03-11T12:00:00Z');
    expect(result).toMatch(/day/);
  });

  it('resolves player age and handles invalid or future dates', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-12T12:00:00Z'));

    expect(getAgeFromBirthDate()).toBe('--');
    expect(getAgeFromBirthDate('invalid')).toBe('--');
    expect(getAgeFromBirthDate('2030-01-01')).toBe('--');
    expect(getAgeFromBirthDate('2000-03-12')).toBe('26');
  });
});
