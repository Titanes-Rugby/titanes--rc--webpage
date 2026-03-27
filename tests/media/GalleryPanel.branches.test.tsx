import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/components/ui', () => ({
  MasonryGallery: ({ onItemClick }: { onItemClick?: (item: { id: string }) => void }) => (
    <button type="button" onClick={() => onItemClick?.({ id: 'missing-id' })}>
      Trigger missing id
    </button>
  ),
}));

import GalleryPanel from '@/pages/media/components/GalleryPanel';

describe('<GalleryPanel /> branches', () => {
  it('keeps lightbox closed when masonry click id is not found', async () => {
    const user = userEvent.setup();
    render(<GalleryPanel items={[{ id: 'g1', title: 'Foto', imageSrc: '/g1.jpg' }]} />);

    await user.click(screen.getByRole('button', { name: /Trigger missing id/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
