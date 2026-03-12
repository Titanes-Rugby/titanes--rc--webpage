import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { usePlayersCatalog } from '@/pages/teams/components/players/usePlayersCatalog';

const players = [
  { id: 'p1', name: 'Carlos Ruiz', position: 'Fly Half', number: '10', imageSrc: '/p1.png' },
  { id: 'p2', name: 'Mateo Reyes', position: 'Wing', number: '11', imageSrc: '/p2.png' },
  { id: 'p3', name: 'Luis Navarro', position: 'Back Row', number: '07', imageSrc: '/p3.png' },
  { id: 'p4', name: 'Victor Mendez', position: 'Hooker', number: '02', imageSrc: '/p4.png' },
  { id: 'p5', name: 'Alberto Cortez', position: 'First Row', number: '01', imageSrc: '/p5.png' },
  { id: 'p6', name: 'Christhoval Barba', position: 'Second Row', number: '04', imageSrc: '/p6.png' },
  { id: 'p7', name: 'Leo Diaz', position: 'Wing', number: '14', imageSrc: '/p7.png' },
];

describe('usePlayersCatalog', () => {
  it('builds filters, paginates and resets page on filter changes', () => {
    const { result } = renderHook(() => usePlayersCatalog(players));

    expect(result.current.positions).toContain('All');
    expect(result.current.positions).toContain('Wing');
    expect(result.current.pages).toBe(2);
    expect(result.current.page).toBe(1);
    expect(result.current.paginatedPlayers).toHaveLength(6);

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
});
