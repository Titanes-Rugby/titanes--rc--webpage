import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import PlayerCardBuilderToolbar from '@/pages/tools/player-card/components/PlayerCardBuilderToolbar';

describe('<PlayerCardBuilderToolbar />', () => {
  it('handles preset selection and share feedback', async () => {
    const user = userEvent.setup();
    const onSelectPreset = vi.fn();
    const onCopyShareLink = vi.fn();

    const { rerender } = render(
      <PlayerCardBuilderToolbar
        presets={[{ id: 'default', label: 'Titular', values: {} as any }]}
        shareStatus="idle"
        onSelectPreset={onSelectPreset}
        onCopyShareLink={onCopyShareLink}
      />,
    );

    await user.click(screen.getByRole('button', { name: /Titular/i }));
    await user.click(screen.getByRole('button', { name: /Copiar link/i }));
    expect(onSelectPreset).toHaveBeenCalledWith('default');
    expect(onCopyShareLink).toHaveBeenCalledTimes(1);

    rerender(
      <PlayerCardBuilderToolbar
        presets={[{ id: 'default', label: 'Titular', values: {} as any }]}
        shareStatus="copied"
        onSelectPreset={onSelectPreset}
        onCopyShareLink={onCopyShareLink}
      />,
    );
    expect(screen.getByText(/Link copiado/i)).toBeInTheDocument();
  });

  it('renders error share feedback', () => {
    render(
      <PlayerCardBuilderToolbar
        presets={[{ id: 'default', label: 'Titular', values: {} as any }]}
        shareStatus="error"
        onSelectPreset={vi.fn()}
        onCopyShareLink={vi.fn()}
      />,
    );

    expect(screen.getByText(/No se pudo copiar/i)).toBeInTheDocument();
  });
});
