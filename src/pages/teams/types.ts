export type TeamTab = 'players' | 'coaches' | 'stats' | 'fixtures';

export const isTeamTab = (value?: string): value is TeamTab => {
  return value === 'players' || value === 'coaches' || value === 'stats' || value === 'fixtures';
};

export type TeamPlayer = {
  id: string;
  name: string;
  position: string;
  number: string;
  imageSrc: string;
  birthDate?: string;
  height?: string;
  weight?: string;
  experienceYears?: string;
  strongHand?: string;
  statuses?: string[];
  bio?: string;
};

export type TeamCoach = {
  id: string;
  name: string;
  role: string;
  imageSrc?: string;
  bio: string;
};

export type TeamStat = {
  id: string;
  label: string;
  value: string;
  change?: string;
};

export type TeamFixture = {
  id: string;
  rival: string;
  date: string;
  place: string;
  rivalLogo?: string;
};

export type TeamProfile = {
  slug: string;
  title: string;
  subtitle: string;
  season: string;
  record: string;
  ranking: string;
  players: TeamPlayer[];
  coaches: TeamCoach[];
  stats: TeamStat[];
  fixtures: TeamFixture[];
};
