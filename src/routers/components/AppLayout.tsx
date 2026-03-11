import { Outlet } from 'react-router-dom';

import BaseLayout from '@components/BaseLayout';
import { ScrollToTopFab } from '@components/ui';

import DevFloatingMenu from './DevFloatingMenu';

const AppLayout = () => {
	return (
		<BaseLayout>
			<Outlet />
			<DevFloatingMenu />
			<ScrollToTopFab />
		</BaseLayout>
	);
};

export default AppLayout;
