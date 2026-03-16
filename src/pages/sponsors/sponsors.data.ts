import type { SponsorItem } from './types';

export const sponsors: SponsorItem[] = [
  {
    id: 'sp-1',
    name: 'Canal Logistics',
    tier: 'main',
    category: 'Main Partner',
    summary: 'Impulsa logistica de viajes y operacion de competencia.',
    url: 'https://example.com/canal-logistics',
    logoSrc: '/images/logo.svg',
  },
  {
    id: 'sp-2',
    name: 'Atlas Nutrition',
    tier: 'gold',
    category: 'Performance',
    summary: 'Soporte nutricional para alto rendimiento y recuperacion.',
    url: 'https://example.com/atlas-nutrition',
    logoSrc: '/images/logo.svg',
  },
  {
    id: 'sp-3',
    name: 'Pacific Motors',
    tier: 'gold',
    category: 'Mobility',
    summary: 'Traslado de staff y planteles durante jornadas oficiales.',
    url: 'https://example.com/pacific-motors',
    logoSrc: '/images/logo.svg',
  },
  {
    id: 'sp-4',
    name: 'Core Med Clinic',
    tier: 'support',
    category: 'Medical',
    summary: 'Atencion medica preventiva y soporte en lesiones.',
    url: 'https://example.com/core-med-clinic',
    logoSrc: '/images/logo.svg',
  },
  {
    id: 'sp-5',
    name: 'Rugby Pro Shop',
    tier: 'support',
    category: 'Equipment',
    summary: 'Equipamiento tecnico para entrenamientos y partidos.',
    url: 'https://example.com/rugby-pro-shop',
    logoSrc: '/images/logo.svg',
  },
  {
    id: 'sp-6',
    name: 'Urban Coffee',
    tier: 'support',
    category: 'Community',
    summary: 'Activaciones con aficion y eventos de comunidad.',
    url: 'https://example.com/urban-coffee',
    logoSrc: '/images/logo.svg',
  },
];

export const tierLabels = {
  main: 'Main Partner',
  gold: 'Gold Partner',
  support: 'Support Partner',
} as const;
