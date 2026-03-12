import { Outlet } from 'react-router-dom';

import BaseLayout from '@components/BaseLayout';
import { ResponsiveDebug } from '@components/ResponsiveDebug';
import { ScrollToTopFab } from '@components/ui';

import DevFloatingMenu from './DevFloatingMenu';

const AppLayout = () => {
	return (
		<BaseLayout>
			<Outlet />
			<DevFloatingMenu />
			<ScrollToTopFab />
			<ResponsiveDebug />
		</BaseLayout>
	);
};

export default AppLayout;
