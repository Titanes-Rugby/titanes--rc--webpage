import { describe, expect, it } from 'vitest';

import { cn, cx } from '@/utils/cn';

describe('cn utils', () => {
  it('joins classes for string templates', () => {
    expect(cx('base', 'p-2', { hidden: false, block: true })).toBe('base p-2 block');
  });

  it('normalizes non-string template input and trims extra spacing', () => {
    expect(cx(['  alpha', 'beta  '], '   gamma  ')).toBe('alphabeta gamma');
    expect(cx(null as never, 'delta')).toBe('delta');
  });

  it('merges tailwind classes with cn', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });
});
