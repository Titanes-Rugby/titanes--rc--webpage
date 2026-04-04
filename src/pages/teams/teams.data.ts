import { basePlayers as basePlayersSeed } from './players.data';
import type { TeamProfile } from './types';

const basePlayers = [
	...basePlayersSeed,
	...basePlayersSeed.map((player) => ({
		...player,
		id: `${player.id}-alt`,
		fullName: `${player.fullName} Jr.`,
		firstName: player.firstName,
		lastName: `${player.lastName} Jr.`,
	})),
];

const withTeam = (players: typeof basePlayers, team: string) =>
	players.map((player) => ({
		...player,
		team,
	}));

const coaches = [
	{
		id: 'c1',
		name: 'Diego Alvarado',
		role: 'Head Coach',
		bio: 'Planificacion tactica, gestion de partido y desarrollo de liderazgo.',
	},
	{
		id: 'c2',
		name: 'Jorge Salinas',
		role: 'Forwards Coach',
		bio: 'Scrum, lineout y contacto con foco en tecnica avanzada.',
	},
	{
		id: 'c3',
		name: 'Marco Bernal',
		role: 'Performance Coach',
		bio: 'Fuerza, potencia y recuperacion para alta competencia.',
	},
];

const fixtures = [
	{ id: 'f1', rival: 'Panama Sharks', date: '17 Apr 2026', place: 'Estadio Nacional' },
	{ id: 'f2', rival: 'Canal Bulls', date: '24 Apr 2026', place: 'Titanes Field' },
	{ id: 'f3', rival: 'Pacific RFC', date: '02 May 2026', place: 'Ciudad Deportiva' },
];

export const teamProfiles: TeamProfile[] = [
	{
		slug: 'primera-division',
		title: 'Titanes',
		subtitle: 'Equipo masculino del plantel principal de competencia nacional',
		season: '2026',
		record: '8W - 2L',
		ranking: '#2 Liga Nacional',
		players: withTeam(basePlayers, 'Titanes'),
		coaches,
		fixtures,
		stats: [
			{ id: 's1', label: 'Tries', value: '31', change: '+14%' },
			{ id: 's2', label: 'Éxito en tackles', value: '89%', change: '+3.2%' },
			{ id: 's3', label: 'Possession', value: '56%', change: '+2.1%' },
			{ id: 's4', label: 'Penalties', value: '9.2', change: '-1.8' },
		],
	},
	{
		slug: 'femenino',
		title: 'Titanides',
		subtitle: 'Equipo femenido del plantel principal de competencia nacional',
		season: '2026',
		record: '7W - 1L',
		ranking: '#1 Conferencia',
		players: withTeam(basePlayers, 'Titanides'),
		coaches,
		fixtures,
		stats: [
			{ id: 's1', label: 'Tries', value: '29', change: '+16%' },
			{ id: 's2', label: 'Éxito en tackles', value: '91%', change: '+4.1%' },
			{ id: 's3', label: 'Possession', value: '58%', change: '+2.8%' },
			{ id: 's4', label: 'Penalties', value: '8.4', change: '-2.2' },
		],
	},
	{
		slug: 'juveniles',
		title: 'Titanes Juveniles',
		subtitle: 'Desarrollo competitivo U18-U20',
		season: '2026',
		record: '6W - 3L',
		ranking: '#3 Liga Juvenil',
		players: withTeam(basePlayers, 'Titanes Juveniles'),
		coaches,
		fixtures,
		stats: [
			{ id: 's1', label: 'Tries', value: '24', change: '+9%' },
			{ id: 's2', label: 'Éxito en tackles', value: '84%', change: '+2.6%' },
			{ id: 's3', label: 'Possession', value: '52%', change: '+1.4%' },
			{ id: 's4', label: 'Penalties', value: '11.1', change: '-1.1' },
		],
	},
];

export const findTeamBySlug = (slug?: string) => teamProfiles.find((team) => team.slug === slug) ?? teamProfiles[0];
