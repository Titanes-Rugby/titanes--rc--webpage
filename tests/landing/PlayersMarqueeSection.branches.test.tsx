import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.useRealTimers();
  vi.resetModules();
  vi.clearAllMocks();
  vi.doUnmock('@/pages/teams/players.data');
  vi.doUnmock('@/components/ui');
  vi.doUnmock('@/pages/landing/components/PlayerCards/CompactPlayerCard');
});

describe('<PlayersMarqueeSection /> branches', () => {
  it('keeps single-player batch stable during timed refresh', async () => {
    vi.useFakeTimers();
    vi.doMock('@/pages/teams/players.data', () => ({
      basePlayers: [
        {
          id: 'p1',
          fullName: 'Solo Player',
          firstName: 'Solo',
          lastName: 'Player',
          position: ['Wing'],
          number: '11',
          imageSrc: '/solo.png',
        },
      ],
    }));
    vi.doMock('@/components/ui', () => ({
      Marquee: ({ items }: { items: Array<{ id: string }> }) => <div data-testid="marquee">{items.map((item) => item.id).join(',')}</div>,
    }));
    vi.doMock('@/pages/landing/components/PlayerCards/CompactPlayerCard', () => ({
      default: () => <div>card</div>,
    }));

    const module = await import('@/pages/landing/components/PlayerCards/PlayersMarqueeSection');
    render(<module.PlayersMarqueeSection />);

    expect(screen.getByTestId('marquee')).toHaveTextContent('p1,p1');
    act(() => {
      vi.advanceTimersByTime(15000);
    });
    expect(screen.getByTestId('marquee')).toHaveTextContent('p1,p1');
  });
});

