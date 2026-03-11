import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import NotFoundPage from './components/NotFoundPage';

export const router = createBrowserRouter([
	{
		Component: AppLayout,
		children: [
			{
				path: '/',
				lazy: () => import('@/pages/landing/route'),
			},
			{
				path: '/ui-components',
				lazy: () => import('@/pages/ui-components/route'),
			},
			{
				path: '/equipos',
				lazy: () => import('@/pages/teams/route'),
			},
			{
				path: '/equipos/:slug',
				lazy: () => import('@/pages/teams/route'),
			},
			{
				path: '/:slug',
				lazy: () => import('@/pages/placeholder/route'),
			},
			{
				path: '/:group/:slug',
				lazy: () => import('@/pages/placeholder/route'),
			},
			{
				path: '*',
				Component: NotFoundPage,
			},
		],
	},
]);
