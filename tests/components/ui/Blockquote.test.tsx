import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Blockquote from '@/components/ui/Blockquote';

describe('<Blockquote />', () => {
  it('renders content with optional cite footer', () => {
    render(
      <Blockquote variant="primary" size="lg" cite="Titanes">
        Honor y disciplina
      </Blockquote>,
    );

    expect(screen.getByText('Honor y disciplina')).toBeInTheDocument();
    expect(screen.getByText('Titanes')).toBeInTheDocument();
  });

  it('renders without footer when cite is not provided', () => {
    render(<Blockquote>Sin cita</Blockquote>);
    expect(screen.getByText('Sin cita')).toBeInTheDocument();
    expect(screen.queryByText('Titanes')).not.toBeInTheDocument();
  });
});
