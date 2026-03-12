import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useTitleFromHandler } from '@/hooks/useTitleFromHandler';

vi.mock('react-router-dom', () => ({
  useMatches: () => [
    { handle: { title: 'Root' } },
    { handle: { title: 'Equipos', description: 'Plantel', hasTabs: true } },
  ],
}));

describe('useTitleFromHandler', () => {
  it('reads metadata from the most specific route handle', () => {
    const { result } = renderHook(() => useTitleFromHandler());
    expect(result.current).toEqual({
      title: 'Equipos',
      description: 'Plantel',
      hasTabs: true,
    });
  });
});
