import type { LucideIcon } from 'lucide-react';

export type PlayerMetric = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
};

export type PlayerCardData = {
  id: string;
  position: string;
  name: string;
  nickname: string;
  imageSrc?: string;
  height: string;
  weight: string;
  speed: string;
  birthYear: string;
  reach: string;
  power: string;
  yearsInTeam: string;
  teamName: string;
  metrics: PlayerMetric[];
};
