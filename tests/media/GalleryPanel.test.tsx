import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import GalleryPanel from '@/pages/media/components/GalleryPanel';

describe('<GalleryPanel />', () => {
  it('opens and closes the media lightbox with external link action', async () => {
    const user = userEvent.setup();
    render(
      <GalleryPanel
        items={[
          { id: 'g1', title: 'Con imageLink', imageSrc: '/g1.jpg', imageLink: 'https://example.com/g1' },
        ]}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Abrir imagen: Con imageLink' }));

    expect(screen.getByRole('dialog', { name: /Con imageLink/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Abrir enlace/i })).toHaveAttribute('href', 'https://example.com/g1');

    await user.click(screen.getByRole('button', { name: 'Cerrar' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: /Con imageLink/i })).not.toBeInTheDocument();
    });
  });

  it('shows at most 30 gallery items', () => {
    render(
      <GalleryPanel
        items={Array.from({ length: 40 }, (_, index) => ({
          id: `g-${index + 1}`,
          title: `Foto ${index + 1}`,
          imageSrc: `/g-${index + 1}.jpg`,
        }))}
      />,
    );

    const masonryGrid = screen.getByTestId('gallery-masonry-grid');
    expect(within(masonryGrid).getAllByRole('img')).toHaveLength(30);
  });

  it('keeps the original classic gallery links', () => {
    render(
      <GalleryPanel
        items={[
          { id: 'g1', title: 'Con imageLink', imageSrc: '/g1.jpg', imageLink: 'https://example.com/g1' },
          { id: 'g2', title: 'Sin imageLink', imageSrc: '/g2.jpg' },
        ]}
      />,
    );

    const classicGrid = screen.getByTestId('gallery-classic-grid');
    const withImageLink = within(classicGrid).getByRole('img', { name: 'Con imageLink' }).closest('a');
    const withSrcFallback = within(classicGrid).getByRole('img', { name: 'Sin imageLink' }).closest('a');

    expect(withImageLink).toHaveAttribute('href', 'https://example.com/g1');
    expect(withSrcFallback).toHaveAttribute('href', '/g2.jpg');
  });
});
