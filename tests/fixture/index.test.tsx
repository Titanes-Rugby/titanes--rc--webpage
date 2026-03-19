import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import FixturePage from '@/pages/fixture';

describe('<FixturePage />', () => {
  it('renders fixture hero and upcoming matches by default', () => {
    render(<FixturePage />);

    expect(screen.getByRole('heading', { name: /Calendario Competitivo/i })).toBeInTheDocument();
    expect(screen.getByText(/Panama Sharks/i)).toBeInTheDocument();
    expect(screen.getByText(/Canal Bulls U20/i)).toBeInTheDocument();
    expect(screen.getByText(/Pacific RFC/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Próximamente/i)).toHaveLength(3);
  });

  it('filters list by results status', async () => {
    const user = userEvent.setup();
    render(<FixturePage />);

    await user.click(screen.getByRole('button', { name: /Resultados/i }));

    expect(screen.getByText(/31 - 19/)).toBeInTheDocument();
    expect(screen.getByText(/22 - 27/)).toBeInTheDocument();
    expect(screen.getByText(/34 - 12/)).toBeInTheDocument();
    expect(screen.getAllByText(/Final/i)).toHaveLength(3);
    expect(screen.queryByText(/Panama Sharks/i)).not.toBeInTheDocument();
  });

  it('combines team and status filters', async () => {
    const user = userEvent.setup();
    render(<FixturePage />);

    await user.click(screen.getByRole('button', { name: /Resultados/i }));
    await user.click(screen.getByRole('button', { name: /Femenino/i }));

    expect(screen.getByText(/Warriors RFC/i)).toBeInTheDocument();
    expect(screen.getByText(/34 - 12/)).toBeInTheDocument();
    expect(screen.queryByText(/Canal Bulls/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Lobos U20/i)).not.toBeInTheDocument();
  });
});
