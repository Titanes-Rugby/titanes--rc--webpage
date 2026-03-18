import { type ComponentType, type FocusEvent, SVGProps, useEffect, useMemo, useRef, useState } from 'react';

import { Dialog } from '@headlessui/react';
import {
	Bars3Icon,
	BookOpenIcon,
	BuildingOffice2Icon,
	CalendarDaysIcon,
	CameraIcon,
	ChevronDownIcon,
	CodeBracketIcon,
	NewspaperIcon,
	PhoneIcon,
	PlayIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UserGroupIcon,
	WrenchScrewdriverIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Logo from '@ui/Logo';
import { cn } from '@/utils/cn';

type MenuEntry = {
	label: string;
	href?: string;
	description?: string;
	children?: MenuEntry[];
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
const MotionLink = motion(Link);

const MENU_ENTRIES: MenuEntry[] = [
	{
		label: 'Club',
		children: [
			{
				label: '¿Quienes somos?',
				href: '/club/quienes-somos',
				description: 'Identidad, misión y visión del club.',
			},
			{
				label: 'Historia',
				href: '/club/historia',
				description: 'Origen, valores y crecimiento del club.',
			},
			{
				label: 'Staff Administrativo',
				href: '/club/staff-tecnico',
				description: 'Presidentes y Junta directiva .',
			},
			{
				label: 'Instalaciones',
				href: '/club/instalaciones',
				description: 'Canchas, gimnasio y espacios de entrenamiento.',
			},
		],
	},
	{
		label: 'Equipos',
		children: [
			{
				label: 'Titanes',
				href: '/equipos/primera-division',
				description: 'Equipo masculino, calendarios y resultados.',
			},
			{
				label: 'Titanides',
				href: '/equipos/femenino',
				description: 'Equipo femenino, staff y proximos partidos.',
			},
			{
				label: 'Titanes Juveniles',
				href: '/equipos/juveniles',
				description: 'Desarrollo competitivo y formativo por categoras.',
			},
		],
	},
	{
		label: 'Media',
		children: [
			{
				label: 'Noticias',
				href: '/media/noticias',
				description: 'Actualizaciones del club y comunicados.',
			},
			{
				label: 'Galera',
				href: '/media/galeria',
				description: 'Fotos destacadas de entrenamientos y partidos.',
			},
			{
				label: 'Videos',
				href: '/media/videos',
				description: 'Momentos destacados, entrevistas y contenido semanal.',
			},
		],
	},
	{
		label: 'Herramientas',
		children: [
			{
				label: 'Tarjeta de jugador',
				href: '/tools/player-card',
				description: 'Crea y exporta tarjetas de jugadores en PNG.',
			},
		],
	},
	{ label: 'Partidos', href: '/fixture' },
	{ label: 'Patrocinadores', href: '/patrocinadores' },
	{ label: 'Contacto', href: '/contacto' },
];

const menuIconByLabel: Record<string, IconComponent> = {
	Club: ShieldCheckIcon,
	Equipos: UserGroupIcon,
	Media: SparklesIcon,
	Tools: WrenchScrewdriverIcon,
	Fixture: CalendarDaysIcon,
	Patrocinadores: BuildingOffice2Icon,
	Contacto: PhoneIcon,
	Historia: BookOpenIcon,
	'Staff Tcnico': UserGroupIcon,
	Instalaciones: BuildingOffice2Icon,
	'Primera Divisin': ShieldCheckIcon,
	Juveniles: UserGroupIcon,
	Femenino: UserGroupIcon,
	Noticias: NewspaperIcon,
	Galera: CameraIcon,
	Videos: PlayIcon,
	'Player Card': CodeBracketIcon,
};

const topMenuIconVariants = {
	rest: { opacity: 0, width: 0, x: -6 },
	hover: { opacity: 1, width: 16, x: 0 },
};

const topMenuItemVariants = {
	rest: { y: 0 },
	hover: { y: -2 },
};

const dropdownIconVariants = {
	rest: { opacity: 0, x: -4, scale: 0.9 },
	hover: { opacity: 1, x: 0, scale: 1 },
};

const dropdownItemVariants = {
	rest: { x: 0 },
	hover: { x: 3 },
};

const getMenuIcon = (label: string): IconComponent =>
	menuIconByLabel[label as keyof typeof menuIconByLabel] ?? SparklesIcon;

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
		transition: { duration: 0.18, ease: 'easeOut' as const },
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
		<Link to="/" className="-m-1.5 p-1.5">
			<span className="sr-only">Titanes Rugby Club</span>
			<Logo size="md" tone="light" />
		</Link>
	</div>
);

type DesktopMenuItemProps = {
	entry: MenuEntry;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const DesktopMenuItem = ({ entry, isOpen, onOpen, onClose }: DesktopMenuItemProps) => {
	const EntryIcon = getMenuIcon(entry.label);
	const closeTimeoutRef = useRef<number | null>(null);
	const clearCloseTimeout = () => {
		if (closeTimeoutRef.current === null) return;
		window.clearTimeout(closeTimeoutRef.current);
		closeTimeoutRef.current = null;
	};
	const handleOpen = () => {
		clearCloseTimeout();
		onOpen();
	};
	const handleCloseWithDelay = () => {
		clearCloseTimeout();
		closeTimeoutRef.current = window.setTimeout(() => onClose(), 140);
	};
	const handleBlurWithin = (event: FocusEvent<HTMLDivElement>) => {
		const currentTarget = event.currentTarget;
		window.requestAnimationFrame(() => {
			if (!currentTarget.contains(document.activeElement)) onClose();
		});
	};

	if (!entry.children?.length) {
		return (
			<MotionLink
				to={entry.href as string}
				className="inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				initial="rest"
				animate="rest"
				whileHover="hover"
				variants={topMenuItemVariants}
			>
				<motion.span
					className="overflow-hidden text-white/90"
					variants={topMenuIconVariants}
					transition={{ duration: 0.2 }}
				>
					<EntryIcon className="h-4 w-4" />
				</motion.span>
				{entry.label}
			</MotionLink>
		);
	}

	return (
		<div
			className="relative"
			onMouseEnter={handleOpen}
			onMouseLeave={handleCloseWithDelay}
			onFocusCapture={handleOpen}
			onBlur={handleBlurWithin}
		>
			<motion.button
				type="button"
				className="inline-flex items-center gap-1.5 rounded-md border-0 bg-transparent px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				initial="rest"
				animate="rest"
				whileHover="hover"
				variants={topMenuItemVariants}
			>
				<motion.span
					className="overflow-hidden text-white/90"
					variants={topMenuIconVariants}
					transition={{ duration: 0.2 }}
				>
					<EntryIcon className="h-4 w-4" />
				</motion.span>
				{entry.label}
				<ChevronDownIcon className="h-4 w-4" />
			</motion.button>
			<AnimatePresence>
				{isOpen ? (
					<motion.div
						className="absolute left-1/2 z-50 mt-3 w-[23rem] -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 p-3 text-primary-900 shadow-2xl backdrop-blur"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={dropdownVariants}
						onMouseEnter={handleOpen}
						onMouseLeave={handleCloseWithDelay}
					>
						<div className="space-y-1">
							{entry.children.map((child) => (
								<MotionLink
									key={child.label}
									to={child.href as string}
									className="flex items-start gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-primary-100/70"
									initial="rest"
									animate="rest"
									whileHover="hover"
									variants={dropdownItemVariants}
								>
									<motion.span
										className="mt-0.5 text-primary-600"
										variants={dropdownIconVariants}
										transition={{ duration: 0.18 }}
									>
										{(() => {
											const ChildIcon = getMenuIcon(child.label);
											return <ChildIcon className="h-4 w-4" />;
										})()}
									</motion.span>
									<div>
										<p className="text-sm font-semibold text-primary-900">{child.label}</p>
										<p className="mt-0.5 text-xs text-primary-700/80">{child.description}</p>
									</div>
								</MotionLink>
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
						className="fixed inset-0 z-40 bg-primary-900/55 backdrop-blur-[2px]"
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
						<div className="flex items-center justify-between border-b border-primary-100 pb-4">
							<Link to="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Titanes Rugby Club</span>
								<Logo className="h-14 w-auto fill-primary-500" />
							</Link>
							<motion.button
								type="button"
								className="rounded-full border border-primary-200 bg-transparent p-2 text-primary-700"
								onClick={() => setMobileMenuOpen(false)}
								whileTap={{ scale: 0.94 }}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-5 w-5" aria-hidden="true" />
							</motion.button>
						</div>

						<motion.div className="mt-6 space-y-2" variants={mobileGroupVariants} initial="hidden" animate="visible">
							{MENU_ENTRIES.map((entry) => {
								const EntryIcon = getMenuIcon(entry.label);

								if (!entry.children?.length) {
									return (
										<MotionLink
											key={entry.label}
											to={entry.href as string}
											className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-900 transition-colors hover:bg-primary-100"
											variants={mobileItemVariants}
											whileTap={{ scale: 0.98 }}
											onClick={() => setMobileMenuOpen(false)}
										>
											<EntryIcon className="h-4 w-4 text-primary-600" />
											{entry.label}
										</MotionLink>
									);
								}

								const isExpanded = expandedSection === entry.label;

								return (
									<motion.div
										key={entry.label}
										className="rounded-xl border border-primary-100"
										variants={mobileItemVariants}
									>
										<button
											type="button"
											className="flex w-full items-center justify-between border-0 bg-transparent px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] text-primary-900"
											onClick={() => setExpandedSection(isExpanded ? null : entry.label)}
											aria-expanded={isExpanded}
										>
											<span className="inline-flex items-center gap-2">
												<EntryIcon className="h-4 w-4 text-primary-600" />
												{entry.label}
											</span>
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
													{entry.children.map((child) => {
														const ChildIcon = getMenuIcon(child.label);

														return (
															<Link
																key={child.label}
																to={child.href as string}
																className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-primary-700 transition-colors hover:bg-primary-50 hover:text-primary-900"
																onClick={() => setMobileMenuOpen(false)}
															>
																<ChildIcon className="h-4 w-4 text-primary-500" />
																{child.label}
															</Link>
														);
													})}
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
			<div className="mx-auto max-w-7xl rounded-2xl border border-white/25 bg-gradient-to-r from-primary-600/95 via-primary-500/95 to-primary-700/95 px-5 shadow-[0_20px_40px_-22px_rgba(5,31,31,0.9)] backdrop-blur-md lg:px-8">
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
