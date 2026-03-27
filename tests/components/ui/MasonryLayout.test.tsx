import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import MasonryLayout from '@/components/ui/MasonryLayout';

describe('<MasonryLayout />', () => {
  it('renders a generic masonry list using renderItem', () => {
    const { container } = render(
      <MasonryLayout
        items={[{ id: 'a', label: 'Uno' }, { id: 'b', label: 'Dos' }]}
        getItemKey={(item) => item.id}
        renderItem={(item) => <p>{item.label}</p>}
      />,
    );

    expect(screen.getByText('Uno')).toBeInTheDocument();
    expect(screen.getByText('Dos')).toBeInTheDocument();
    expect(container.querySelector('.h-56')).toBeTruthy();
    expect(container.querySelector('.h-72')).toBeTruthy();
  });

  it('supports custom item key and custom height callback', () => {
    const { container } = render(
      <MasonryLayout
        items={[{ id: 'x', label: 'Uno' }]}
        getItemHeightClassName={() => 'h-96'}
        renderItem={(item) => <p>{item.label}</p>}
      />,
    );

    expect(screen.getByText('Uno')).toBeInTheDocument();
    expect(container.querySelector('.h-96')).toBeTruthy();
  });
});
