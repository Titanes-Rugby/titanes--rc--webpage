import { SVGProps, useEffect, useMemo, useRef, useState } from 'react';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

import Logo from '@/assets/logo.svg?react';

type MenuEntry = {
	label: string;
	href?: string;
	description?: string;
	children?: MenuEntry[];
};

const MENU_ENTRIES: MenuEntry[] = [
	{
		label: 'Club',
		children: [
			{
				label: 'Historia',
				href: '#',
				description: 'Origen, valores y crecimiento del club.',
			},
			{
				label: 'Staff Técnico',
				href: '#',
				description: 'Entrenadores, preparación física y soporte.',
			},
			{
				label: 'Instalaciones',
				href: '#',
				description: 'Canchas, gimnasio y espacios de entrenamiento.',
			},
		],
	},
	{
		label: 'Equipos',
		children: [
			{
				label: 'Primera División',
				href: '#',
				description: 'Plantilla principal, calendario y resultados.',
			},
			{
				label: 'Juveniles',
				href: '#',
				description: 'Desarrollo competitivo y formativo por categorías.',
			},
			{
				label: 'Femenino',
				href: '#',
				description: 'Programa femenino, staff y próximos partidos.',
			},
		],
	},
	{
		label: 'Media',
		children: [
			{
				label: 'Noticias',
				href: '#',
				description: 'Actualizaciones del club y comunicados.',
			},
			{
				label: 'Galería',
				href: '#',
				description: 'Fotos destacadas de entrenamientos y partidos.',
			},
			{
				label: 'Videos',
				href: '#',
				description: 'Highlights, entrevistas y contenido semanal.',
			},
		],
	},
	{ label: 'Fixture', href: '#' },
	{ label: 'Patrocinadores', href: '#' },
	{ label: 'Contacto', href: '#' },
];

const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const panelVariants = {
	hidden: { x: '100%', opacity: 0.9 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 260, damping: 28 },
	},
	exit: { x: '100%', opacity: 0.9, transition: { duration: 0.2 } },
};

const dropdownVariants = {
	hidden: { opacity: 0, y: 8, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.18, ease: 'easeOut' },
	},
	exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.14 } },
};

const mobileGroupVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const mobileItemVariants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0 },
};

const Brand = () => (
	<div className="flex lg:flex-1">
		<a href="#" className="-m-1.5 p-1.5">
			<span className="sr-only">Titanes Rugby Club</span>
			<Logo className="h-14 w-auto fill-white sm:h-16" />
		</a>
	</div>
);

type DesktopMenuItemProps = {
	entry: MenuEntry;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const DesktopMenuItem = ({ entry, isOpen, onOpen, onClose }: DesktopMenuItemProps) => {
	if (!entry.children?.length) {
		return (
			<motion.a
				href={entry.href ?? '#'}
				className="rounded-md px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				whileHover={{ y: -2 }}
			>
				{entry.label}
			</motion.a>
		);
	}

	return (
		<div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
			<motion.button
				type="button"
				className="inline-flex items-center gap-1 rounded-md border-0 bg-transparent px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				onFocus={onOpen}
				onBlur={onClose}
				whileHover={{ y: -2 }}
			>
				{entry.label}
				<ChevronDownIcon className="h-4 w-4" />
			</motion.button>
			<AnimatePresence>
				{isOpen ? (
					<motion.div
						className="absolute left-1/2 z-50 mt-3 w-[23rem] -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 p-3 text-titanes-900 shadow-2xl backdrop-blur"
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="space-y-1">
							{entry.children.map((child) => (
								<motion.a
									key={child.label}
									href={child.href ?? '#'}
									className="block rounded-xl px-3 py-2 transition-colors hover:bg-titanes-100/70"
									whileHover={{ x: 3 }}
								>
									<p className="text-sm font-semibold text-titanes-900">{child.label}</p>
									{child.description ? <p className="mt-0.5 text-xs text-titanes-700/80">{child.description}</p> : null}
								</motion.a>
							))}
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

type DesktopMenuProps = {
	openKey: string | null;
	setOpenKey: (key: string | null) => void;
};

const DesktopMenu = ({ openKey, setOpenKey }: DesktopMenuProps) => (
	<motion.div
		className="hidden lg:flex lg:items-center lg:gap-x-9"
		initial={{ opacity: 0, y: -10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.32, ease: 'easeOut' }}
	>
		{MENU_ENTRIES.map((entry) => (
			<DesktopMenuItem
				key={entry.label}
				entry={entry}
				isOpen={openKey === entry.label}
				onOpen={() => setOpenKey(entry.label)}
				onClose={() => setOpenKey(null)}
			/>
		))}
	</motion.div>
);

type MobileMenuProps = {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (value: boolean) => void;
};

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
	const [expandedSection, setExpandedSection] = useState<string | null>(null);

	return (
		<AnimatePresence>
			{mobileMenuOpen ? (
				<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
					<motion.div
						className="fixed inset-0 z-40 bg-titanes-900/55 backdrop-blur-[2px]"
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					/>
					<Dialog.Panel
						as={motion.div}
						className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 shadow-2xl sm:max-w-sm"
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="flex items-center justify-between border-b border-titanes-100 pb-4">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Titanes Rugby Club</span>
								<Logo className="h-14 w-auto fill-titanes-500" />
							</a>
							<motion.button
								type="button"
								className="rounded-full border border-titanes-200 bg-transparent p-2 text-titanes-700"
								onClick={() => setMobileMenuOpen(false)}
								whileTap={{ scale: 0.94 }}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-5 w-5" aria-hidden="true" />
							</motion.button>
						</div>

						<motion.div className="mt-6 space-y-2" variants={mobileGroupVariants} initial="hidden" animate="visible">
							{MENU_ENTRIES.map((entry) => {
								if (!entry.children?.length) {
									return (
										<motion.a
											key={entry.label}
											href={entry.href ?? '#'}
											className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-titanes-900 transition-colors hover:bg-titanes-100"
											variants={mobileItemVariants}
											whileTap={{ scale: 0.98 }}
										>
											{entry.label}
										</motion.a>
									);
								}

								const isExpanded = expandedSection === entry.label;

								return (
									<motion.div
										key={entry.label}
										className="rounded-xl border border-titanes-100"
										variants={mobileItemVariants}
									>
										<button
											type="button"
											className="flex w-full items-center justify-between border-0 bg-transparent px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] text-titanes-900"
											onClick={() => setExpandedSection(isExpanded ? null : entry.label)}
											aria-expanded={isExpanded}
										>
											{entry.label}
											<motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
												<ChevronDownIcon className="h-4 w-4" />
											</motion.span>
										</button>
										<AnimatePresence initial={false}>
											{isExpanded ? (
												<motion.div
													className="space-y-1 px-2 pb-2"
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: 'auto', opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.2 }}
												>
													{entry.children.map((child) => (
														<a
															key={child.label}
															href={child.href ?? '#'}
															className="block rounded-lg px-3 py-2 text-sm text-titanes-700 transition-colors hover:bg-titanes-50 hover:text-titanes-900"
														>
															{child.label}
														</a>
													))}
												</motion.div>
											) : null}
										</AnimatePresence>
									</motion.div>
								);
							})}
						</motion.div>
					</Dialog.Panel>
				</Dialog>
			) : null}
		</AnimatePresence>
	);
};

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openKey, setOpenKey] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);

	const headerClasses = useMemo(
		() => ['fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8', 'text-white'].join(' '),
		[],
	);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			if (currentY <= 0) {
				setIsVisible(true);
				lastScrollY.current = 0;
				return;
			}

			if (currentY > lastScrollY.current && currentY > 64) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (mobileMenuOpen) {
			setIsVisible(true);
		}
	}, [mobileMenuOpen]);

	return (
		<motion.header
			className={headerClasses}
			initial={{ y: 0, opacity: 1 }}
			animate={isVisible ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
			transition={{ type: 'tween', duration: 0.32 }}
		>
			<div className="mx-auto max-w-7xl rounded-2xl border border-white/25 bg-gradient-to-r from-titanes-600/95 via-titanes-500/95 to-titanes-700/95 px-5 shadow-[0_20px_40px_-22px_rgba(5,31,31,0.9)] backdrop-blur-md lg:px-8">
				<nav className="flex items-center justify-between py-3.5" aria-label="Global">
					<Brand />
					<DesktopMenu openKey={openKey} setOpenKey={setOpenKey} />
					<div className="flex items-center gap-2 lg:hidden">
						<motion.button
							type="button"
							className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2.5"
							onClick={() => setMobileMenuOpen(true)}
							whileTap={{ scale: 0.94 }}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-5 w-5 text-white" aria-hidden="true" />
						</motion.button>
					</div>
				</nav>
			</div>
			<MobileMenu setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
		</motion.header>
	);
};

export default Header;
