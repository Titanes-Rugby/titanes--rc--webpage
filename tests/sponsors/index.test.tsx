import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SponsorsPage from '@/pages/sponsors';

describe('<SponsorsPage />', () => {
  it('renders hero and sponsor content', () => {
    render(<SponsorsPage />);

    expect(screen.getByRole('heading', { name: /Alianzas Que Impulsan Titanes/i })).toBeInTheDocument();
    expect(screen.getByText(/Wall Of Partners/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Canal Logistics/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Atlas Nutrition/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Urban Coffee/i })).toBeInTheDocument();
  });
});
