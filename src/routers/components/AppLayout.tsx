import { Outlet } from 'react-router-dom';

import DevFloatingMenu from './DevFloatingMenu';

const AppLayout = () => {
	return (
		<>
			<Outlet />
			<DevFloatingMenu />
		</>
	);
};

export default AppLayout;
