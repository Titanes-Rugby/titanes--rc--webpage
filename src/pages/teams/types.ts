export type TeamTab = 'players' | 'coaches' | 'stats';

export const isTeamTab = (value?: string): value is TeamTab => {
	return value === 'players' || value === 'coaches' || value === 'stats';
};

export type TeamPlayerCardMetrics = {
	speed?: string;
	reach?: string;
	power?: string;
	birthYear?: string;
};

export type TeamPlayer = {
	id: string;
	fullName: string;
	position: string[];
	firstName: string;
	lastName: string;
	number: string;
	imageSrc: string;
	birthDate?: string;
	height?: string;
	weight?: string;
	experienceYears?: string;
	strongHand?: string;
	statuses?: string[];
	nationalCaps?: number;
	team?: string;
	bio?: string;
	cardMetrics?: TeamPlayerCardMetrics;
};

export type TeamCoach = {
	id: string;
	name: string;
	role: string;
	imageSrc?: string;
	birthDate?: string;
	experienceYears?: string;
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
	fixtures?: TeamFixture[];
};
