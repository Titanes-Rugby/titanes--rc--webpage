import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

import ClubPage from './index';

export const Component = ClubPage;

export const ErrorBoundary = RouteErrorBoundary;

export const handle = {
  routeId: 'club',
};
