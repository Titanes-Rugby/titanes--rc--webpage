import { describe, expect, it } from 'vitest';

import FixturePage from '@/pages/fixture';
import { Component, ErrorBoundary } from '@/pages/fixture/route';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

describe('fixture route module', () => {
  it('exports the fixture page component', () => {
    expect(Component).toBe(FixturePage);
  });

  it('exports the shared route error boundary', () => {
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });
});
