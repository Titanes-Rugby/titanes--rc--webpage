import { describe, expect, it } from 'vitest';

import SponsorsPage from '@/pages/sponsors';
import { Component, ErrorBoundary } from '@/pages/sponsors/route';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';
import { sponsors, tierLabels } from '@/pages/sponsors/sponsors.data';

describe('sponsors route and data', () => {
  it('exports sponsors route component and shared error boundary', () => {
    expect(Component).toBe(SponsorsPage);
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });

  it('provides consistent sponsor tiers and labels', () => {
    expect(tierLabels.main).toBe('Main Partner');
    expect(tierLabels.gold).toBe('Gold Partner');
    expect(tierLabels.support).toBe('Support Partner');
    expect(sponsors).toHaveLength(6);
  });
});
