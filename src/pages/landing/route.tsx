import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

import LandingPage from './index';

export const Component = LandingPage;

export const loader = async () => {
	return null;
};

export const handle = {
	routeId: 'landing',
	title: 'Titanes Rugby Club',
};

export const ErrorBoundary = RouteErrorBoundary;
