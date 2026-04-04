import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const marqueeItemsSpy = vi.fn();

vi.mock('@components/ui', () => ({
  Marquee: ({ items }: { items: Array<{ id: string }> }) => {
    marqueeItemsSpy(items);
    return <div data-testid="players-marquee">{items.map((item) => item.id).join(',')}</div>;
  },
  PlayerPortrait: ({ alt }: { alt: string }) => <div>{alt}</div>,
}));

import { PlayersMarqueeSection } from '@/pages/landing/components/PlayerCards';

describe('<PlayersMarqueeSection />', () => {
  beforeEach(() => {
    marqueeItemsSpy.mockClear();
  });

  it('renders players in marquee and duplicates the shuffled list', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0);

    render(<PlayersMarqueeSection />);

    expect(screen.getByRole('heading', { name: /Jugadores en movimiento/i })).toBeInTheDocument();
    expect(screen.getByTestId('players-marquee')).toBeInTheDocument();

    const calledItems = marqueeItemsSpy.mock.calls[0][0] as Array<{ id: string }>;
    const half = calledItems.length / 2;
    const firstHalf = calledItems.slice(0, half).map((item) => item.id);
    const secondHalf = calledItems.slice(half).map((item) => item.id);

    expect(calledItems).toHaveLength(12);
    expect(firstHalf).toEqual(secondHalf);
    expect(firstHalf).toHaveLength(6);

    randomSpy.mockRestore();
  });

  it('refreshes marquee batch over time so visible players change', () => {
    vi.useFakeTimers();
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0);

    render(<PlayersMarqueeSection />);
    const firstItems = marqueeItemsSpy.mock.calls.at(-1)?.[0] as Array<{ id: string }>;

    act(() => {
      vi.advanceTimersByTime(15000);
    });
    const refreshedItems = marqueeItemsSpy.mock.calls.at(-1)?.[0] as Array<{ id: string }>;

    const firstHalfA = firstItems.slice(0, firstItems.length / 2).map((item) => item.id);
    const firstHalfB = refreshedItems.slice(0, refreshedItems.length / 2).map((item) => item.id);
    expect(firstHalfA).not.toEqual(firstHalfB);

    randomSpy.mockRestore();
    vi.useRealTimers();
  });
});
