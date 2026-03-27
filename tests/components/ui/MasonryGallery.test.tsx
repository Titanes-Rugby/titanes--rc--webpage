import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import MasonryGallery, { type MasonryGalleryItem } from '@/components/ui/MasonryGallery';

const buildItems = (total: number): MasonryGalleryItem[] =>
  Array.from({ length: total }, (_, index) => ({
    id: `item-${index + 1}`,
    title: `Imagen ${index + 1}`,
    imageSrc: `/images/${index + 1}.jpg`,
  }));

describe('<MasonryGallery />', () => {
  it('clamps requestedItems between min and max bounds', () => {
    const { rerender } = render(<MasonryGallery items={buildItems(40)} requestedItems={45} />);
    expect(screen.getAllByRole('img')).toHaveLength(30);

    rerender(<MasonryGallery items={buildItems(18)} requestedItems={2} />);
    expect(screen.getAllByRole('img')).toHaveLength(10);
  });

  it('emits item callback when clicking a tile', async () => {
    const onItemClick = vi.fn();
    const user = userEvent.setup();
    render(<MasonryGallery items={buildItems(10)} onItemClick={onItemClick} />);

    await user.click(screen.getByRole('button', { name: 'Abrir imagen: Imagen 1' }));

    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick.mock.calls[0][0].id).toBe('item-1');
  });

  it('renders non-click mode and custom item actions', () => {
    render(
      <MasonryGallery
        items={buildItems(10)}
        renderItemActions={(item) => <span>Accion {item.id}</span>}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Abrir imagen: Imagen 1' })).not.toBeInTheDocument();
    expect(screen.getByText('Accion item-1')).toBeInTheDocument();
  });
});
