import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SponsorsGrid from '@/pages/sponsors/components/SponsorsGrid';

describe('<SponsorsGrid /> branch cases', () => {
  it('handles sponsors without url and without logo image', () => {
    render(
      <SponsorsGrid
        sponsors={[
          {
            id: 'sp-no-url',
            name: 'Sponsor sin enlace',
            tier: 'support',
            category: 'Community',
            summary: 'Resumen',
            logoSrc: '/logo-x.svg',
          },
          {
            id: 'sp-no-logo',
            name: 'Sponsor sin logo',
            tier: 'gold',
            category: 'Performance',
            summary: 'Resumen 2',
            url: 'https://example.com',
          },
        ]}
      />,
    );

    expect(screen.queryByRole('link', { name: /^Sponsor sin enlace$/i })).not.toBeInTheDocument();

    const logoAnchor = screen.getByRole('link', { name: /Sponsor sin enlace logo/i });
    expect(logoAnchor).toHaveAttribute('href', '#');
    expect(logoAnchor).not.toHaveAttribute('target');
    expect(logoAnchor).not.toHaveAttribute('rel');

    expect(screen.queryByRole('img', { name: /Sponsor sin logo logo/i })).not.toBeInTheDocument();
  });
});
