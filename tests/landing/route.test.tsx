import { describe, expect, it } from 'vitest';

import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';
import LandingPage from '@/pages/landing';
import { Component, ErrorBoundary, handle, loader } from '@/pages/landing/route';

describe('landing route module', () => {
	it('exports the landing component and error boundary', () => {
		expect(Component).toBe(LandingPage);
		expect(ErrorBoundary).toBe(RouteErrorBoundary);
	});

	it('defines the route metadata and loader result', async () => {
		expect(handle).toEqual({
			routeId: 'landing',
			title: 'Titanes Rugby Club',
		});

		await expect(loader()).resolves.toBeNull();
	});
});
