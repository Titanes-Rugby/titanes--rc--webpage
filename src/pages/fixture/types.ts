export type FixtureStatus = 'upcoming' | 'result';

export type FixtureTeam = 'all' | 'primera-division' | 'juveniles' | 'femenino';

export type FixtureItem = {
  id: string;
  team: Exclude<FixtureTeam, 'all'>;
  competition: string;
  round: string;
  date: string;
  time: string;
  venue: string;
  home: string;
  away: string;
  homeLogoSrc?: string;
  awayLogoSrc?: string;
  status: FixtureStatus;
  homeScore?: number;
  awayScore?: number;
};

export type FixtureFilterOption = {
  id: FixtureTeam;
  label: string;
};
