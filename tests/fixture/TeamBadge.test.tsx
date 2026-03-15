import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TeamBadge from '@/pages/fixture/components/TeamBadge';

describe('<TeamBadge />', () => {
  it('renders logo variant when logo source is provided', () => {
    render(<TeamBadge name="Titanes RFC" logoSrc="/logos/titanes.svg" />);

    expect(screen.getByRole('img', { name: /Logo Titanes RFC/i })).toHaveAttribute('src', '/logos/titanes.svg');
    expect(screen.getByText('Titanes RFC')).toBeInTheDocument();
  });

  it('renders initials variant when logo source is missing', () => {
    render(<TeamBadge name="Canal Bulls" />);

    expect(screen.getByText('CB')).toBeInTheDocument();
    expect(screen.getByText('Canal Bulls')).toBeInTheDocument();
  });

  it('handles irregular spacing and single-word names for initials', () => {
    const { rerender } = render(<TeamBadge name="   Titanes   " />);
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(<TeamBadge name="  Canal   Bulls  " />);
    expect(screen.getByText('CB')).toBeInTheDocument();
  });
});
