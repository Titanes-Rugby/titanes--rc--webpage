import { Outlet } from 'react-router-dom';

import { ScrollToTopFab } from '@components/ui';

import DevFloatingMenu from './DevFloatingMenu';

const AppLayout = () => {
	return (
		<>
			<Outlet />
			<DevFloatingMenu />
			<ScrollToTopFab />
		</>
	);
};

export default AppLayout;
