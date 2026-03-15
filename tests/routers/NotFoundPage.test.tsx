import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import NotFoundPage from '@/routers/components/NotFoundPage';

describe('<NotFoundPage />', () => {
  it('renders 404 heading and not-found message', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Pagina no encontrada/i, level: 1 })).toBeInTheDocument();
  });
});
