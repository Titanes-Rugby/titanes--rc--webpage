import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.doUnmock('@/pages/teams/players.data');
});

describe('playerCards.data mapping', () => {
  it('maps player card fields from base players', async () => {
    vi.doMock('@/pages/teams/players.data', () => ({
      basePlayers: [
        {
          id: 'p1',
          firstName: 'Carlos',
          lastName: 'Ruiz',
          position: ['Fly Half'],
          imageSrc: '/p1.png',
          height: '5\'10"',
          weight: '82 KG',
          experienceYears: '6',
          team: 'Titanes',
          birthDate: '1998-01-15',
          cardMetrics: { speed: '7.0 mps', reach: '16 m', power: '88 KG', birthYear: '1998' },
        },
      ],
    }));

    const module = await import('@/pages/landing/components/PlayerCards/playerCards.data');
    const card = module.playerCards[0];
    expect(card.position).toBe('Fly Half');
    expect(card.name).toBe('Carlos');
    expect(card.nickname).toBe('Ruiz');
    expect(card.teamName).toBe('Titanes');
    expect(card.metrics).toHaveLength(6);
  });

  it('uses fallback values when optional source fields are missing', async () => {
    vi.doMock('@/pages/teams/players.data', () => ({
      basePlayers: [
        {
          id: 'p1',
          firstName: 'A',
          lastName: 'B',
          position: [],
          imageSrc: '/a.png',
          weight: '81 KG',
          cardMetrics: { reach: '14 m' },
        },
        {
          id: 'p2',
          firstName: 'C',
          lastName: 'D',
          position: [],
          imageSrc: '/b.png',
        },
      ],
    }));

    const module = await import('@/pages/landing/components/PlayerCards/playerCards.data');
    const [first, second] = module.playerCards;

    expect(first.position).toBe('--');
    expect(first.height).toBe('--');
    expect(first.yearsInTeam).toBe('--');
    expect(first.speed).toBe('7.0 mps');
    expect(first.power).toBe('81 KG');
    expect(first.birthYear).toBe('1990');
    expect(first.teamName).toBe('Titanes Rugby Club');

    expect(second.power).toBe('90 KG');
    expect(second.reach).toBe('16 m');
  });
});

