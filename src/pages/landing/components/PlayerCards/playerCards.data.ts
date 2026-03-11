import { Calendar, Dumbbell, Gauge, Ruler, Shield, Weight } from 'lucide-react';

import type { PlayerCardData } from '@components/ui/PlayerCard';

export const playerCards: PlayerCardData[] = [
  {
    id: 'christhoval-barba',
    position: 'Second Row',
    name: 'Christhoval',
    nickname: 'Barba',
    imageSrc: '/images/players/player_1.png',
    height: "6'1\"",
    weight: '102 KG',
    speed: '26 mps',
    birthYear: '1989',
    reach: '17 m',
    power: '80 KG',
    yearsInTeam: '14',
    teamName: 'Titanes Rugby Club',
    metrics: [
      { id: 'weight', label: 'Weight', value: '102 KG', icon: Weight },
      { id: 'height', label: 'Height', value: "6'1\"", icon: Ruler },
      { id: 'speed', label: 'Speed', value: '26 mps', icon: Gauge },
      { id: 'birth-year', label: 'Born', value: '1989', icon: Calendar },
      { id: 'reach', label: 'Reach', value: '17 m', icon: Shield },
      { id: 'power', label: 'Power', value: '80 KG', icon: Dumbbell },
    ],
  },
  {
    id: 'alberto-cortez',
    position: 'First Row',
    name: 'Alberto',
    nickname: 'Cortez',
    imageSrc: '/images/players/player_1.png',
    height: "5'11\"",
    weight: '95 KG',
    speed: '29 mps',
    birthYear: '1993',
    reach: '15 m',
    power: '76 KG',
    yearsInTeam: '9',
    teamName: 'Titanes Rugby Club',
    metrics: [
      { id: 'weight', label: 'Weight', value: '95 KG', icon: Weight },
      { id: 'height', label: 'Height', value: "5'11\"", icon: Ruler },
      { id: 'speed', label: 'Speed', value: '29 mps', icon: Gauge },
      { id: 'birth-year', label: 'Born', value: '1993', icon: Calendar },
      { id: 'reach', label: 'Reach', value: '15 m', icon: Shield },
      { id: 'power', label: 'Power', value: '76 KG', icon: Dumbbell },
    ],
  },
];
