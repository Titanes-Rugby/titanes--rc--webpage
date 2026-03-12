import { describe, expect, it } from 'vitest';

import UiComponentsPage from '@/pages/ui-components';
import { Component, ErrorBoundary, handle, loader } from '@/pages/ui-components/route';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

describe('ui-components route module', () => {
  it('exports route component, boundary and metadata', async () => {
    expect(Component).toBe(UiComponentsPage);
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
    expect(handle).toEqual({ routeId: 'ui-components', title: 'UI Components' });
    await expect(loader()).resolves.toBeNull();
  });
});
