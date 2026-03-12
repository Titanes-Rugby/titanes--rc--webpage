import { describe, expect, it } from 'vitest';

import PlayerCardToolPage from '@/pages/tools/player-card';
import { Component, ErrorBoundary } from '@/pages/tools/player-card/route';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

describe('player-card route', () => {
  it('exports tool page component and shared route boundary', () => {
    expect(Component).toBe(PlayerCardToolPage);
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });
});
