import { Calendar, Dumbbell, Gauge, Ruler, Shield, Weight } from 'lucide-react';

import type { PlayerCardData } from '@components/ui/PlayerCard';

import type { PlayerCardBuilderFormValues, PlayerCardPreset } from './types';

export const playerCardBuilderDefaults: PlayerCardBuilderFormValues = {
	id: 'player-custom',
	position: 'Second Row',
	name: 'Christhoval',
	nickname: 'Barba',
	imageSrc: '/images/players/Christhoval_Barba.png',
	height: '6\'1"',
	weight: '102 KG',
	speed: '26 mps',
	birthYear: '1989',
	reach: '17 m',
	power: '80 KG',
	yearsInTeam: '14',
	teamName: 'Titanes Rugby Club',
};

export const buildPlayerCardFromValues = (values: PlayerCardBuilderFormValues): PlayerCardData => ({
	...values,
	metrics: [
		{ id: 'weight', label: 'Weight', value: values.weight, icon: Weight },
		{ id: 'height', label: 'Height', value: values.height, icon: Ruler },
		{ id: 'speed', label: 'Speed', value: values.speed, icon: Gauge },
		{ id: 'birth-year', label: 'Born', value: values.birthYear, icon: Calendar },
		{ id: 'reach', label: 'Reach', value: values.reach, icon: Shield },
		{ id: 'power', label: 'Power', value: values.power, icon: Dumbbell },
	],
});

export const playerCardPresets: PlayerCardPreset[] = [
	{
		id: 'default',
		label: 'Titular',
		values: playerCardBuilderDefaults,
	},
	{
		id: 'primera-division',
		label: 'Primera Division',
		values: {
			...playerCardBuilderDefaults,
			id: 'alberto-cortez',
			position: 'First Row',
			name: 'Alberto',
			nickname: 'Cortez',
			height: '5\'11"',
			weight: '95 KG',
			speed: '29 mps',
			birthYear: '1993',
			reach: '15 m',
			power: '76 KG',
			yearsInTeam: '9',
		},
	},
	{
		id: 'juveniles',
		label: 'Juvenil',
		values: {
			...playerCardBuilderDefaults,
			id: 'mateo-reyes',
			position: 'Wing',
			name: 'Mateo',
			nickname: 'Reyes',
			height: '5\'10"',
			weight: '80 KG',
			speed: '31 mps',
			birthYear: '2004',
			reach: '14 m',
			power: '72 KG',
			yearsInTeam: '3',
		},
	},
];
