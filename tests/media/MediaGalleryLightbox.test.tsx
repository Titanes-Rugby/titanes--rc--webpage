import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import MediaGalleryLightbox from '@/pages/media/components/MediaGalleryLightbox';

describe('<MediaGalleryLightbox />', () => {
  it('renders nothing when item is null', () => {
    render(<MediaGalleryLightbox item={null} onClose={vi.fn()} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('hides external link when imageLink is missing and closes from button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <MediaGalleryLightbox
        item={{ id: 'g1', title: 'Sin enlace', imageSrc: '/g1.jpg' }}
        onClose={onClose}
      />,
    );

    expect(screen.getByRole('dialog', { name: /Sin enlace/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Abrir enlace/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Cerrar' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
