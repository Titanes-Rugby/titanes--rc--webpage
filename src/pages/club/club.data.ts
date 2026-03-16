import type { ClubSection, ClubSectionId, FacilityItem, StaffMember } from './types';

export const clubSections: ClubSection[] = [
	{
		id: 'quienes-somos',
		label: '¿Quiénes somos?',
		title: '¿Quiénes Somos?',
		description: 'Identidad, misión y visión del club.',
	},
	{
		id: 'historia',
		label: 'Historia',
		title: 'Historia Del Club',
		description: 'Origen, identidad y crecimiento competitivo de Titanes Rugby Club.',
	},
	{
		id: 'staff-tecnico',
		label: 'Staff Administrativo',
		title: 'Staff Administrativo',
		description: 'Equipo de trabajo que gestiona operaciones, logística y rendimiento global.',
	},
	{
		id: 'instalaciones',
		label: 'Instalaciones',
		title: 'Instalaciones',
		description: 'Infraestructura para formacion, recuperacion y competencia.',
	},
];

export const staffMembers: StaffMember[] = [
	{
		id: 's1',
		name: 'Diego Alvarado',
		role: 'Director Deportivo',
		birthDate: '1985-04-14',
		imageSrc: '/images/players/player_1.png',
		focus: 'Planificacion estrategica y relacion con liga y patrocinadores.',
	},
	{
		id: 's2',
		name: 'Jorge Salinas',
		role: 'Coordinador Logistico',
		birthDate: '1988-09-02',
		imageSrc: '/images/players/player_1.png',
		focus: 'Viajes, equipamiento y coordinacion de campo y arbitraje.',
	},
	{
		id: 's3',
		name: 'Marco Bernal',
		role: 'Gestor de Performance',
		birthDate: '1990-12-11',
		imageSrc: '/images/players/player_1.png',
		focus: 'Monitoreo de cargas, recuperacion y disponibilidad de plantel.',
	},
	{
		id: 's4',
		name: 'Laura Pineda',
		role: 'Team Manager',
		birthDate: '1992-07-23',
		imageSrc: '/images/players/player_1.png',
		focus: 'Operacion diaria del plantel y comunicacion con competencias.',
	},
];

export const facilityItems: FacilityItem[] = [
	{
		id: 'f1',
		title: 'Cancha de entrenamiento',
		label: 'Cancha UTP Sede Central',
		location: 'Universidad Tecnologica de Panama, Sede Central',
		imageSrc: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80',
		mapUrl: 'https://www.google.com/maps/search/Universidad+Tecnologica+de+Panama',
		detail: 'Campo para microciclos semanales, énfasis en técnica y acondicionamiento.',
	},
	{
		id: 'f2',
		title: 'Cancha de juego 1',
		label: 'Estadio Emilio Royo',
		location: 'Parque Lefevre',
		imageSrc: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1600&q=80',
		mapUrl: 'https://www.google.com/maps/search/Estadio+Emilio+Royo+Panama',
		detail: 'Sede de juegos oficiales y amistosos con graderías y camerinos.',
	},
	{
		id: 'f3',
		title: 'Cancha de juego 2',
		label: 'Ciudad del Saber',
		location: 'Clayton',
		imageSrc: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
		mapUrl: 'https://www.google.com/maps/search/Ciudad+del+Saber+Panama',
		detail: 'Superficie alterna para rotar cargas y jugar torneos relámpago.',
	},
	{
		id: 'f4',
		title: 'Cancha de entrenamiento 2',
		label: 'Cancha UTP Sede Tocumen',
		location: 'Tocumen',
		imageSrc: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1600&q=80',
		mapUrl: 'https://www.google.com/maps/search/UTP+Tocumen',
		detail: 'Espacio de desarrollo para academias y sesiones especializadas.',
	},
];

export const getClubSection = (slug?: string): ClubSection => {
	const section = clubSections.find((item) => item.id === slug);
	return section ?? clubSections[0];
};

export const isClubSection = (value?: string): value is ClubSectionId => {
	return clubSections.some((item) => item.id === value);
};
