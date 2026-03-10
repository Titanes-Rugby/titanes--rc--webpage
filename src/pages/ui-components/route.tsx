import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

import UiComponentsPage from './index';

export const Component = UiComponentsPage;

export const loader = async () => null;

export const handle = {
	routeId: 'ui-components',
	title: 'UI Components',
};

export const ErrorBoundary = RouteErrorBoundary;
