import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/pages/landing/components/footerLinks', () => ({
  footerSections: [
    {
      title: 'About',
      links: [
        { label: 'External Link', href: 'https://example.com' },
        { label: 'Internal Link', href: '/club' },
      ],
    },
  ],
  legalLinks: [{ label: 'Contact Us', href: '/contacto' }],
  socialLinks: [{ label: 'X', href: '#' }],
}));

import LandingFooter from '@/pages/landing/components/LandingFooter';

describe('<LandingFooter />', () => {
  it('renders external anchors and internal router links', () => {
    render(
      <MemoryRouter>
        <LandingFooter />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /External Link/i })).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByRole('link', { name: /External Link/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /Internal Link/i })).toHaveAttribute('href', '/club');
    expect(screen.getByRole('link', { name: /Contact Us/i })).toHaveAttribute('href', '/contacto');
  });
});
