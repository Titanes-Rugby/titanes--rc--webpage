import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

import TeamsPage from './index';

export const Component = TeamsPage;

export const ErrorBoundary = RouteErrorBoundary;

export const handle = {
  routeId: 'teams',
};
