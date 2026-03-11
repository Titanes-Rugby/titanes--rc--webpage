export type TeamTab = 'players' | 'coaches' | 'stats' | 'fixtures';

export type TeamPlayer = {
  id: string;
  name: string;
  position: string;
  number: string;
  imageSrc: string;
  age?: string;
  height?: string;
  weight?: string;
  bio?: string;
};

export type TeamCoach = {
  id: string;
  name: string;
  role: string;
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
