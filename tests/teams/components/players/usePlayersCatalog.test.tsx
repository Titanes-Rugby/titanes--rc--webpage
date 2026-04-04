import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { usePlayersCatalog } from '@/pages/teams/components/players/usePlayersCatalog';

const player = (id: string, fullName: string, position: string, number: string) => {
  const [firstName = fullName, ...rest] = fullName.split(' ');
  return {
    id,
    fullName,
    firstName,
    lastName: rest.join(' ') || firstName,
    position: [position],
    number,
    imageSrc: `/${id}.png`,
  };
};

const players = [
  player('p1', 'Carlos Ruiz', 'Fly Half', '10'),
  player('p2', 'Mateo Reyes', 'Wing', '11'),
  player('p3', 'Luis Navarro', 'Back Row', '07'),
  player('p4', 'Victor Mendez', 'Hooker', '02'),
  player('p5', 'Alberto Cortez', 'First Row', '01'),
  player('p6', 'Christhoval Barba', 'Second Row', '04'),
  player('p7', 'Leo Diaz', 'Wing', '14'),
  player('p8', 'Diego Torres', 'Center', '12'),
  player('p9', 'Bruno Campos', 'Scrum Half', '09'),
  player('p10', 'Andres Smith', 'Full Back', '15'),
];

describe('usePlayersCatalog', () => {
  it('builds filters, paginates and resets page on filter changes', () => {
    const { result } = renderHook(() => usePlayersCatalog(players));

    expect(result.current.positions).toContain('Todas');
    expect(result.current.positions).toContain('Wing');
    expect(result.current.pages).toBe(2);
    expect(result.current.page).toBe(1);
    expect(result.current.paginatedPlayers).toHaveLength(9);

    act(() => result.current.setPage(2));
    expect(result.current.page).toBe(2);
    expect(result.current.paginatedPlayers).toHaveLength(1);

    act(() => result.current.onChangeQuery('wing'));
    expect(result.current.page).toBe(1);
    expect(result.current.filteredCount).toBe(2);

    act(() => result.current.onChangePosition('Wing'));
    expect(result.current.page).toBe(1);
    expect(result.current.filteredCount).toBe(2);
  });

  it('clamps current page when filters shrink result pages', () => {
    const playersWithTeams = players.map((player, index) => ({
      ...player,
      team: index < 9 ? 'Titanes' : 'Titanides',
    }));
    const { result } = renderHook(() => usePlayersCatalog(playersWithTeams));

    act(() => result.current.setPage(2));
    expect(result.current.page).toBe(2);

    act(() => result.current.onChangeTeam('Titanes'));
    expect(result.current.page).toBe(1);
    expect(result.current.pages).toBe(1);

    act(() => result.current.setPage(5));
    expect(result.current.page).toBe(1);

    act(() => result.current.onChangePosition('Hooker'));
    expect(result.current.filteredCount).toBe(1);
  });
});
