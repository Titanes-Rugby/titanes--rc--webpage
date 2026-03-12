import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.doUnmock('@/pages/landing/components/PlayerCards/playerCards.data');
});

describe('ui-components preview blocks', () => {
  it('renders animated tilt card preview copy', async () => {
    const module = await import('@/pages/ui-components/components/AnimatedTiltCardPreview');
    render(<module.default />);
    expect(screen.getByText('Reusable 3D Surface')).toBeInTheDocument();
  });

  it('renders player-card preview when first player exists', async () => {
    vi.doMock('@components/ui/PlayerCard', () => ({
      default: ({ player }: { player: { name: string } }) => <div>{player.name}</div>,
    }));

    const module = await import('@/pages/ui-components/components/PlayerCardPreview');
    render(<module.default />);
    expect(screen.getByText('Christhoval')).toBeInTheDocument();
  });

  it('returns null when player-card data is empty', async () => {
    vi.doMock('@/pages/landing/components/PlayerCards/playerCards.data', () => ({ playerCards: [] }));
    vi.doMock('@components/ui/PlayerCard', () => ({ default: () => <div>card</div> }));

    const module = await import('@/pages/ui-components/components/PlayerCardPreview');
    const { container } = render(<module.default />);
    expect(container.firstChild).toBeNull();
  });

  it('returns null when player portraits are incomplete', async () => {
    vi.doMock('@/pages/landing/components/PlayerCards/playerCards.data', () => ({
      playerCards: [{ name: 'A', imageSrc: '/a.png' }, { name: 'B', imageSrc: '' }],
    }));
    vi.doMock('@components/ui', () => ({ PlayerPortrait: () => <div>portrait</div> }));

    const module = await import('@/pages/ui-components/components/PlayerPortraitPreview');
    const { container } = render(<module.default />);
    expect(container.firstChild).toBeNull();
  });

  it('renders both portraits when data includes two player images', async () => {
    vi.doMock('@components/ui', () => ({
      PlayerPortrait: ({ alt }: { alt: string }) => <div>{alt}</div>,
    }));

    const module = await import('@/pages/ui-components/components/PlayerPortraitPreview');
    render(<module.default />);
    expect(screen.getByText('Christhoval')).toBeInTheDocument();
    expect(screen.getByText('Alberto')).toBeInTheDocument();
  });
});
