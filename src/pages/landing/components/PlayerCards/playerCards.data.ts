import { Calendar, Dumbbell, Gauge, Ruler, Shield, Weight } from 'lucide-react';

import type { PlayerCardData } from '@components/ui/PlayerCard';
import { basePlayers } from '@/pages/teams/players.data';

const toBirthYear = (birthDate?: string) => birthDate?.split('-')[0] ?? '1990';

const toPlayerCard = (player: (typeof basePlayers)[number]): PlayerCardData => {
	const speed = player.cardMetrics?.speed ?? '7.0 mps';
	const reach = player.cardMetrics?.reach ?? '16 m';
	const power = player.cardMetrics?.power ?? player.weight ?? '90 KG';
	const birthYear = player.cardMetrics?.birthYear ?? toBirthYear(player.birthDate);
	const height = player.height ?? '--';
	const weight = player.weight ?? '--';
	const yearsInTeam = player.experienceYears ?? '--';
	return {
		id: player.id,
		position: player.position[0] ?? '--',
		name: player.firstName,
		nickname: player.lastName,
		imageSrc: player.imageSrc,
		height,
		weight,
		speed,
		birthYear,
		reach,
		power,
		yearsInTeam,
		teamName: player.team ?? 'Titanes Rugby Club',
		metrics: [
			{ id: 'weight', label: 'Weight', value: weight, icon: Weight },
			{ id: 'height', label: 'Height', value: height, icon: Ruler },
			{ id: 'speed', label: 'Speed', value: speed, icon: Gauge },
			{ id: 'birth-year', label: 'Born', value: birthYear, icon: Calendar },
			{ id: 'reach', label: 'Reach', value: reach, icon: Shield },
			{ id: 'power', label: 'Power', value: power, icon: Dumbbell },
		],
	};
};

export const playerCards: PlayerCardData[] = basePlayers.slice(0, 2).map(toPlayerCard);
