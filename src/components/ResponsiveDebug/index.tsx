const breakpoints = [
	{ name: 'DEFAULT', class: 'sm:hidden' },
	{ name: 'sm', class: 'hidden sm:block md:hidden' },
	{ name: 'md', class: 'hidden md:block lg:hidden' },
	{ name: 'lg', class: 'hidden lg:block xl:hidden' },
	{ name: 'xl', class: 'hidden xl:block 2xl:hidden' },
	{ name: '2xl', class: 'hidden 2xl:block' },
];

export const ResponsiveDebug: React.FC = () => {
	if (!import.meta.env.DEV) {
		return null;
	}

	return (
		<div
			className="fixed bottom-0 left-0 z-[9999] rounded-md rounded-l-none bg-gray-900 px-4 py-2 font-mono text-xs text-white uppercase shadow-lg select-none"
			aria-hidden="true"
		>
			{breakpoints.map(({ name, class: className }) => (
				<span key={name} className={className}>
					sreen: {name}
				</span>
			))}
		</div>
	);
};
