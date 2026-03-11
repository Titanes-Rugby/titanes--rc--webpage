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
				path: '/club',
				lazy: () => import('@/pages/club/route'),
			},
			{
				path: '/club/:slug',
				lazy: () => import('@/pages/club/route'),
			},
			{
				path: '/club/:slug/:section',
				lazy: () => import('@/pages/club/route'),
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
				path: '/equipos/:slug/:tab',
				lazy: () => import('@/pages/teams/route'),
			},
			{
				path: '/media',
				lazy: () => import('@/pages/media/route'),
			},
			{
				path: '/media/:section',
				lazy: () => import('@/pages/media/route'),
			},
			{
				path: '/fixture',
				lazy: () => import('@/pages/fixture/route'),
			},
			{
				path: '/fixtures',
				lazy: () => import('@/pages/fixture/route'),
			},
			{
				path: '/patrocinadores',
				lazy: () => import('@/pages/sponsors/route'),
			},
			{
				path: '/contacto',
				lazy: () => import('@/pages/contact/route'),
			},
			{
				path: '/tools/player-card',
				lazy: () => import('@/pages/tools/player-card/route'),
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
