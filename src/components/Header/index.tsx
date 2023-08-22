import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { ReactComponent as Logo } from '@/assets/logo.svg';

interface Props {
	label: string;
	href?: string;
}

const MenuItem = ({ label, href = '/' }: Props) => {
	return (
		<a
			href={href}
			className="uppercase ease-in duration-150 transition-colors text-sm font-semibold leading-6 py-2 items-center flex text-inherit hover:text-cyan-500"
		>
			{label}
		</a>
	);
};

const MENU_ENTRIES = ['News', 'About', 'Videos', 'Fixture', 'matches', 'Contact'];

interface MenuProps {
	onOpen: () => void;
}
const Menu = ({ onOpen }: MenuProps) => {
	return (
		<>
			<div className="flex lg:hidden">
				<button
					type="button"
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
					onClick={onOpen}
				>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon className="h-6 w-6 text-inherit" aria-hidden="true" />
				</button>
			</div>

			<div className="hidden lg:flex lg:gap-x-12 text-inherit">
				{MENU_ENTRIES.map((entry) => (
					<MenuItem key={entry} label={entry} />
				))}
			</div>
		</>
	);
};

interface MobileMenuProps {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
	return (
		<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
			<div className="fixed inset-0 z-50" />
			<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div className="flex items-center justify-between">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Logo className="h-16 w-auto hover:drop-shadow-[0_0_1em_#61dafbaa] fill-titanes-500" />
					</a>
					<button
						type="button"
						className="-m-2.5 rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(false)}
					>
						<span className="sr-only">Close menu</span>
						<XMarkIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className="space-y-2 py-6">
							{MENU_ENTRIES.map((entry) => (
								<a
									key={entry}
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									{entry}
								</a>
							))}
						</div>
						<div className="py-6 sr-only">
							<a
								href="#"
								className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								Log in
							</a>
						</div>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
};

const Brand = () => (
	<div className="flex lg:flex-1">
		<a href="#" className="-m-1.5 p-1.5">
			<span className="sr-only">Titanes Rugby Club</span>
			<Logo className="h-16 w-auto hover:drop-shadow-[0_0_1em_#61dafbaa] fill-white" />
		</a>
	</div>
);

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="absolute inset-x-0 top-0 z-50 w-full bg-titanes-500 text-white">
			<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<Brand />
				<Menu onOpen={() => setMobileMenuOpen(true)} />
				<div className="hidden lg:flex lg:flex-1 lg:justify-end sr-">
					<a href="#" className="text-sm font-semibold leading-6 text-inherit sr-only">
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<MobileMenu setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
		</header>
	);
};

export default Header;
