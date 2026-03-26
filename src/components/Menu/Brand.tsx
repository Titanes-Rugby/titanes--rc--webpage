import { Link } from 'react-router-dom';

import Logo from '@ui/Logo';

const Brand = () => (
	<div className="flex lg:flex-1">
		<Link to="/" className="-m-1.5 p-1.5">
			<span className="sr-only">Titanes Rugby Club</span>
			<Logo size="md" tone="light" />
		</Link>
	</div>
);

export default Brand;
