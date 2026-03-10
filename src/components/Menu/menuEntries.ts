export type MenuEntry = {
	label: string;
	href?: string;
	description?: string;
	children?: MenuEntry[];
};

export const MENU_ENTRIES: MenuEntry[] = [
	{
		label: 'Club',
		children: [
			{ label: 'Historia', href: '#', description: 'Origen, valores y crecimiento del club.' },
			{ label: 'Staff Tecnico', href: '#', description: 'Entrenadores, preparacion fisica y soporte.' },
			{ label: 'Instalaciones', href: '#', description: 'Canchas, gimnasio y espacios de entrenamiento.' },
		],
	},
	{
		label: 'Equipos',
		children: [
			{ label: 'Primera Division', href: '#', description: 'Plantilla principal, calendario y resultados.' },
			{ label: 'Juveniles', href: '#', description: 'Desarrollo competitivo y formativo por categorias.' },
			{ label: 'Femenino', href: '#', description: 'Programa femenino, staff y proximos partidos.' },
		],
	},
	{
		label: 'Media',
		children: [
			{ label: 'Noticias', href: '#', description: 'Actualizaciones del club y comunicados.' },
			{ label: 'Galeria', href: '#', description: 'Fotos destacadas de entrenamientos y partidos.' },
			{ label: 'Videos', href: '#', description: 'Highlights, entrevistas y contenido semanal.' },
		],
	},
	{ label: 'Fixture', href: '#' },
	{ label: 'Patrocinadores', href: '#' },
	{ label: 'Contacto', href: '#' },
];
