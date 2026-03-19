import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return { ...actual, useNavigate: () => navigateMock };
});

vi.mock('@components/Parallax', () => ({
  default: ({ children }: { children: ReactNode }) => <div data-testid="parallax">{children}</div>,
}));

vi.mock('@components/CountUpStat', () => ({
  default: ({ label }: { label: string }) => <div>{label}</div>,
}));

import HeroSection from '@/pages/landing/components/HeroSection';

describe('<HeroSection />', () => {
  it('renders hero text and routes CTA clicks', async () => {
    const user = userEvent.setup();
    navigateMock.mockClear();
    render(<HeroSection />);

    expect(screen.getByRole('heading', { name: /Rugby de alto nivel/i })).toBeInTheDocument();
    expect(screen.getByText(/Jugadores activos/i)).toBeInTheDocument();
    expect(screen.getByText(/Divisiones competitivas/i)).toBeInTheDocument();
    expect(screen.getByText(/Años de historia|A&ntilde;os de historia/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Ver partidos/i }));
    await user.click(screen.getByRole('button', { name: /Unirme al Club/i }));

    expect(navigateMock).toHaveBeenNthCalledWith(1, '/fixture');
    expect(navigateMock).toHaveBeenNthCalledWith(2, '/contacto');
  });
});
