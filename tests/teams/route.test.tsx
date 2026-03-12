import { describe, expect, it } from 'vitest';

import TeamsPage from '@/pages/teams';
import { findTeamBySlug } from '@/pages/teams/teams.data';
import { Component, ErrorBoundary, handle } from '@/pages/teams/route';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

describe('teams route module', () => {
  it('exports the teams component and error boundary', () => {
    expect(Component).toBe(TeamsPage);
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });

  it('defines teams route metadata', () => {
    expect(handle).toEqual({ routeId: 'teams' });
  });

  it('resolves team by slug with fallback to first profile', () => {
    expect(findTeamBySlug('juveniles').slug).toBe('juveniles');
    expect(findTeamBySlug('unknown').slug).toBe('primera-division');
  });
});
