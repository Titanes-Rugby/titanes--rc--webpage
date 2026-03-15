import { describe, expect, it } from 'vitest';

import ClubPage from '@/pages/club';
import { Component, ErrorBoundary, handle } from '@/pages/club/route';
import { getClubSection, isClubSection } from '@/pages/club/club.data';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

describe('club route and data', () => {
  it('exports route component, error boundary and metadata', () => {
    expect(Component).toBe(ClubPage);
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
    expect(handle).toEqual({ routeId: 'club' });
  });

  it('validates and resolves club sections', () => {
    expect(isClubSection('historia')).toBe(true);
    expect(isClubSection('staff-tecnico')).toBe(true);
    expect(isClubSection('instalaciones')).toBe(true);
    expect(isClubSection('otro')).toBe(false);
    expect(getClubSection('staff-tecnico').title).toBe('Staff Tecnico');
    expect(getClubSection('invalid').id).toBe('quienes-somos');
  });
});
