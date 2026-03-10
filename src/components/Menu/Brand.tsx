import Logo from '@/assets/logo.svg?react';

const Brand = () => (
	<div className="flex lg:flex-1">
		<a href="#" className="-m-1.5 p-1.5">
			<span className="sr-only">Titanes Rugby Club</span>
			<Logo className="h-14 w-auto fill-white sm:h-16" />
		</a>
	</div>
);

export default Brand;
