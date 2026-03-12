import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { preservedSearch, usePreservedSearch, usePreservingNavigate } from '@/hooks/usePreservingNavigate';

const navigateSpy = vi.fn();
const searchParams = new URLSearchParams('lang=es&team=titanes');

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateSpy,
  useSearchParams: () => [searchParams],
}));

describe('usePreservingNavigate', () => {
  it('merges destination and current search params', () => {
    const value = preservedSearch('/media?section=videos', searchParams);
    expect(value).toEqual({ pathname: '/media', search: 'lang=es&team=titanes&section=videos', hash: undefined });
    expect(preservedSearch(-1, searchParams)).toBe(-1);
  });

  it('returns preserved destination and calls navigate with merged params', () => {
    const { result: preserved } = renderHook(() => usePreservedSearch('/equipos?tab=players'));
    expect(preserved.current).toEqual({
      pathname: '/equipos',
      search: 'lang=es&team=titanes&tab=players',
      hash: undefined,
    });

    const { result } = renderHook(() => usePreservingNavigate());
    act(() => result.current('/club?section=historia', { replace: true }));

    expect(navigateSpy).toHaveBeenCalledWith(
      { pathname: '/club', search: 'lang=es&team=titanes&section=historia', hash: undefined },
      { replace: true },
    );
  });

  it('supports object destinations with hash and empty pathname fallback', () => {
    const value = preservedSearch({ search: '?view=cards', hash: '#top' }, searchParams);
    expect(value).toEqual({
      pathname: '',
      search: 'lang=es&team=titanes&view=cards',
      hash: '#top',
    });
  });
});
