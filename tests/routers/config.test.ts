import { describe, expect, it, vi } from 'vitest';

const createBrowserRouter = vi.fn((routes: unknown) => routes);

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...actual,
    createBrowserRouter,
  };
});

describe('router config', () => {
  it('builds app routes with expected paths', async () => {
    const { router } = await import('@/routers/config');
    expect(createBrowserRouter).toHaveBeenCalledTimes(1);

    const root = (router as Array<{ children: Array<{ path?: string }> }>)[0];
    const paths = root.children.map((route) => route.path);

    expect(paths).toEqual(
      expect.arrayContaining([
        '/',
        '/ui-components',
        '/club',
        '/club/:slug',
        '/club/:slug/:section',
        '/equipos',
        '/equipos/:slug',
        '/media',
        '/fixture',
        '/fixtures',
        '/patrocinadores',
        '/contacto',
        '/tools/player-card',
        '/:slug',
        '/:group/:slug',
        '*',
      ]),
    );

    const lazyRoutes = root.children.filter(
      (route): route is { lazy: () => Promise<{ Component?: unknown }> } => typeof (route as any).lazy === 'function',
    );
    const modules = await Promise.all(lazyRoutes.map((route) => route.lazy()));
    expect(modules.every((module) => 'Component' in module)).toBe(true);
  }, 30000);
});
