import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import MediaTabs from '@/pages/media/components/MediaTabs';

describe('<MediaTabs />', () => {
  it('renders section links with expected routes', () => {
    render(
      <MemoryRouter>
        <MediaTabs activeSection="noticias" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Noticias/i })).toHaveAttribute('href', '/media/noticias');
    expect(screen.getByRole('link', { name: /Galeria/i })).toHaveAttribute('href', '/media/galeria');
    expect(screen.getByRole('link', { name: /Videos/i })).toHaveAttribute('href', '/media/videos');
  });
});
