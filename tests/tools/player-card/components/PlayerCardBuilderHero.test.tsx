import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PlayerCardBuilderHero from '@/pages/tools/player-card/components/PlayerCardBuilderHero';

describe('<PlayerCardBuilderHero />', () => {
  it('renders title and tool description', () => {
    render(<PlayerCardBuilderHero />);
    expect(screen.getByRole('heading', { name: /Player Card Builder/i })).toBeInTheDocument();
    expect(screen.getByText(/Completa los datos del jugador/i)).toBeInTheDocument();
  });
});
