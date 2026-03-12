import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const toPngMock = vi.fn();

vi.mock('html-to-image', () => ({
  toPng: (...args: unknown[]) => toPngMock(...args),
}));

vi.mock('@/components/ui', () => ({
  Button: ({ children, onClick, loading, ...props }: any) => (
    <button type="button" onClick={onClick} {...props}>
      {loading ? 'loading' : children}
    </button>
  ),
  PlayerCard: ({ player }: any) => <div>Card {player.id}</div>,
}));

import PlayerCardPreviewCanvas from '@/pages/tools/player-card/components/PlayerCardPreviewCanvas';

describe('<PlayerCardPreviewCanvas />', () => {
  beforeEach(() => {
    toPngMock.mockReset();
  });

  it('exports normal card as png', async () => {
    const user = userEvent.setup();
    toPngMock.mockResolvedValue('data:image/png;base64,abc');

    render(<PlayerCardPreviewCanvas player={{ id: 'p1' } as any} />);
    await user.click(screen.getByRole('button', { name: /Exportar PNG/i }));

    expect(toPngMock).toHaveBeenCalled();
    expect(screen.queryByText(/No fue posible exportar la imagen/i)).not.toBeInTheDocument();
  });

  it('shows error message when export fails', async () => {
    const user = userEvent.setup();
    toPngMock.mockRejectedValue(new Error('fail'));
    render(<PlayerCardPreviewCanvas player={{ id: 'p2' } as any} />);

    await user.click(screen.getByRole('button', { name: /Exportar Cuadrado/i }));
    expect(screen.getByText(/No fue posible exportar la imagen/i)).toBeInTheDocument();
  });

  it('uses fallback filename when player id is empty', async () => {
    const user = userEvent.setup();
    const originalCreateElement = document.createElement.bind(document);
    const fakeLink = { download: '', href: '', click: vi.fn() } as any;
    const createElementSpy = vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'a') return fakeLink;
      return originalCreateElement(tagName);
    });
    toPngMock.mockResolvedValue('data:image/png;base64,abc');

    render(<PlayerCardPreviewCanvas player={{ id: '' } as any} />);

    await user.click(screen.getByRole('button', { name: /Exportar PNG/i }));
    expect(fakeLink.download).toBe('player-card-normal.png');

    createElementSpy.mockRestore();
  });

  it('skips second export while one export is already active', async () => {
    const user = userEvent.setup();
    let resolveExport: ((value: string) => void) | null = null;
    toPngMock.mockImplementation(
      () =>
        new Promise<string>((resolve) => {
          resolveExport = resolve;
        }),
    );

    render(<PlayerCardPreviewCanvas player={{ id: 'p4' } as any} />);
    await user.click(screen.getByRole('button', { name: /Exportar PNG/i }));
    await screen.findByRole('button', { name: /loading/i });
    await user.click(screen.getByRole('button', { name: /Exportar Cuadrado/i }));

    expect(toPngMock).toHaveBeenCalledTimes(1);
    await act(async () => {
      resolveExport?.('data:image/png;base64,abc');
    });
  });
});
