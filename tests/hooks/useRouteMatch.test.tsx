import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { isRouteMatched, useRouteMatch } from '@/hooks/useRouteMatch';

describe('useRouteMatch', () => {
  it('matches route patterns and params', () => {
    expect(isRouteMatched('/equipos/u18', '/equipos/:slug')).toBe(true);
    expect(isRouteMatched('/equipos/u18/stats', '/equipos/:slug')).toBe(false);
    expect(isRouteMatched('/media/noticias', /\/media\/.*/)).toBe(true);
    expect(isRouteMatched('/club/historia', '/club/*')).toBe(true);
  });

  it('reads current pathname from router location', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MemoryRouter initialEntries={['/media/noticias']}>{children}</MemoryRouter>
    );

    const { result } = renderHook(() => useRouteMatch('/media/:section'), { wrapper });
    expect(result.current).toBe(true);
  });
});
