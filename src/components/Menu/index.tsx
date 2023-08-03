import reactLogo from '@/assets/react.svg';

interface Props {
	label: string;
	href?: string;
}

const MenuItem = ({ label, href = '/' }: Props) => {
	return (
		<li>
			<a
				href={href}
				className="uppercase lg:px-5 ease-in duration-150 transition-colors font-medium py-2 items-center flex text-inherit hover:text-cyan-500"
			>
				{label}
			</a>
		</li>
	);
};

const MENU_ENTRIES = ['News', 'About', 'Videos', 'Fixture', 'matches', 'Contact'];

const Menu = () => {
	return (
		<header className="w-full z-30 bg-titanes-500">
			<div className="container mx-auto">
				<div className="text-center flex h-16">
					<div className="shrink-0 mr-4 justify-center items-center flex">
						<a href="/" className="block" aria-label="Titanes RC">
							<img src={reactLogo} className="hover:drop-shadow-[0_0_1em_#61dafbaa] h-6" alt="React logo" />
						</a>
					</div>
					<nav className="md:flex-grow md:flex hidden">
						<ul className="justify-start items-center flex-wrap grow flex text-white">
							{MENU_ENTRIES.map((entry) => (
								<MenuItem key={entry} label={entry} />
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Menu;
