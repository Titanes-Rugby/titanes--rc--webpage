import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import VideosPanel from '@/pages/media/components/VideosPanel';

describe('<VideosPanel />', () => {
  it('renders linked and non-linked video cards', () => {
    render(
      <VideosPanel
        items={[
          {
            id: 'v1',
            title: 'Con enlace',
            duration: '02:10',
            summary: 'Resumen',
            imageSrc: '/v1.jpg',
            link: 'https://example.com/video-1',
          },
          { id: 'v2', title: 'Sin enlace', duration: '04:20', summary: 'Resumen', imageSrc: '/v2.jpg' },
        ]}
      />,
    );

    expect(screen.getByRole('link', { name: /Ver video/i })).toHaveAttribute('href', 'https://example.com/video-1');
    expect(screen.getByText('Sin enlace').closest('a')).toBeNull();
    expect(screen.getByText('02:10')).toBeInTheDocument();
    expect(screen.getByText('04:20')).toBeInTheDocument();
  });
});
