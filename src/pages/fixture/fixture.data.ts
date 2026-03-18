import type { FixtureFilterOption, FixtureItem } from './types';

export const fixtureTeamOptions: FixtureFilterOption[] = [
  { id: 'all', label: 'Todos' },
  { id: 'primera-division', label: 'Primera' },
  { id: 'juveniles', label: 'Juveniles' },
  { id: 'femenino', label: 'Femenino' },
];

export const fixtures: FixtureItem[] = [
  { id: 'fx-1', team: 'primera-division', competition: 'Liga Nacional', round: 'Jornada 7', date: '17 Apr 2026', time: '16:00', venue: 'Estadio Nacional', venueUrl: 'https://www.google.com/maps/search/Estadio+Nacional+Panama', home: 'Titanes', away: 'Panama Sharks', homeLogoSrc: '/images/logo.svg', status: 'upcoming' },
  { id: 'fx-2', team: 'juveniles', competition: 'Liga Juvenil', round: 'Jornada 5', date: '19 Apr 2026', time: '14:30', venue: 'Cancha Titanes', venueUrl: 'https://www.google.com/maps/search/Cancha+Titanes', home: 'Titanes U20', away: 'Canal Bulls U20', homeLogoSrc: '/images/logo.svg', status: 'upcoming' },
  { id: 'fx-3', team: 'femenino', competition: 'Conferencia Femenina', round: 'Jornada 6', date: '21 Apr 2026', time: '19:00', venue: 'Ciudad Deportiva', venueUrl: 'https://www.google.com/maps/search/Ciudad+Deportiva+Panama', home: 'Titanes Femenino', away: 'Pacific RFC', homeLogoSrc: '/images/logo.svg', status: 'upcoming' },
  { id: 'fx-4', team: 'primera-division', competition: 'Liga Nacional', round: 'Jornada 6', date: '09 Apr 2026', time: '18:00', venue: 'Titanes Field', venueUrl: 'https://www.google.com/maps/search/Titanes+Field', home: 'Titanes', away: 'Canal Bulls', homeLogoSrc: '/images/logo.svg', status: 'result', homeScore: 31, awayScore: 19 },
  { id: 'fx-5', team: 'juveniles', competition: 'Liga Juvenil', round: 'Jornada 4', date: '06 Apr 2026', time: '15:00', venue: 'Estadio Sur', venueUrl: 'https://www.google.com/maps/search/Estadio+Sur', home: 'Lobos U20', away: 'Titanes U20', awayLogoSrc: '/images/logo.svg', status: 'result', homeScore: 22, awayScore: 27 },
  { id: 'fx-6', team: 'femenino', competition: 'Conferencia Femenina', round: 'Jornada 5', date: '04 Apr 2026', time: '17:30', venue: 'Cancha Titanes', venueUrl: 'https://www.google.com/maps/search/Cancha+Titanes', home: 'Titanes Femenino', away: 'Warriors RFC', homeLogoSrc: '/images/logo.svg', status: 'result', homeScore: 34, awayScore: 12 },
];
