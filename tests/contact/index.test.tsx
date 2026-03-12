import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactPage from '@/pages/contact';

describe('<ContactPage />', () => {
  it('renders hero and contact channels', () => {
    render(<ContactPage />);

    expect(screen.getByRole('heading', { name: /Hablemos De Rugby/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contacto@titanesrugbyclub.com/i })).toHaveAttribute(
      'href',
      'mailto:contacto@titanesrugbyclub.com',
    );
    expect(screen.getByRole('link', { name: /\+507 6000-1122/i })).toHaveAttribute(
      'href',
      'https://wa.me/50760001122',
    );
    expect(
      screen.getByRole('link', { name: /Cancha Titanes, Ciudad de Panama/i }),
    ).toHaveAttribute('href', 'https://maps.google.com/?q=Ciudad+de+Panama');
  });
});
