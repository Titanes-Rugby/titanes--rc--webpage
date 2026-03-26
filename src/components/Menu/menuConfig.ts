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
} from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

export type MenuEntry = {
	label: string;
	href?: string;
	description?: string;
	children?: MenuEntry[];
};

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const MENU_ENTRIES: MenuEntry[] = [
	{
		label: 'Club',
		children: [
			{ label: '¿Quienes somos?', href: '/club/quienes-somos', description: 'Identidad, misión y visión del club.' },
			{ label: 'Historia', href: '/club/historia', description: 'Origen, valores y crecimiento del club.' },
			{ label: 'Personal administrativo', href: '/club/staff-tecnico', description: 'Presidentes y Junta directiva .' },
			{ label: 'Instalaciones', href: '/club/instalaciones', description: 'Canchas, gimnasio y espacios de entrenamiento.' },
		],
	},
	{
		label: 'Equipos',
		children: [
			{ label: 'Titanes', href: '/equipos/primera-division', description: 'Equipo masculino, calendarios y resultados.' },
			{ label: 'Titanides', href: '/equipos/femenino', description: 'Equipo femenino, staff y proximos partidos.' },
			{ label: 'Titanes Juveniles', href: '/equipos/juveniles', description: 'Desarrollo competitivo y formativo por categoras.' },
		],
	},
	{
		label: 'Media',
		children: [
			{ label: 'Noticias', href: '/media/noticias', description: 'Actualizaciones del club y comunicados.' },
			{ label: 'Galeria', href: '/media/galeria', description: 'Fotos destacadas de entrenamientos y partidos.' },
			{ label: 'Videos', href: '/media/videos', description: 'Momentos destacados, entrevistas y contenido semanal.' },
		],
	},
	{
		label: 'Herramientas',
		children: [{ label: 'Tarjeta de jugador', href: '/tools/player-card', description: 'Crea y exporta tarjetas de jugadores en PNG.' }],
	},
	{ label: 'Partidos', href: '/fixture' },
	{ label: 'Patrocinadores', href: '/patrocinadores' },
	{ label: 'Contacto', href: '/contacto' },
];

const menuIconByLabel: Record<string, IconComponent> = {
	Club: ShieldCheckIcon,
	Equipos: UserGroupIcon,
	Media: SparklesIcon,
	Herramientas: WrenchScrewdriverIcon,
	Partidos: CalendarDaysIcon,
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
	'¿Quienes somos?': ShieldCheckIcon,
	Personal: UserGroupIcon,
	Titanes: ShieldCheckIcon,
	Titanides: UserGroupIcon,
	'Tarjeta de jugador': CodeBracketIcon,
};

export const getMenuIcon = (label: string): IconComponent =>
	menuIconByLabel[label as keyof typeof menuIconByLabel] ?? SparklesIcon;

export { ChevronDownIcon, Bars3Icon };
