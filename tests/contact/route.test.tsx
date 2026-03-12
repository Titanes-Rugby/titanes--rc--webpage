import { describe, expect, it } from 'vitest';

import ContactPage from '@/pages/contact';
import { Component, ErrorBoundary } from '@/pages/contact/route';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

describe('contact route module', () => {
  it('exports contact page as route component', () => {
    expect(Component).toBe(ContactPage);
  });

  it('exports shared route error boundary', () => {
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });
});
