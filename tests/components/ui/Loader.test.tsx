import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Loader from '@/components/ui/Loader';

vi.mock('@/components/ui/Logo', () => ({
  default: ({ size, tone, className }: { size: string; tone: string; className?: string }) => (
    <div data-testid="logo" data-size={size} data-tone={tone} className={className} />
  ),
}));

describe('<Loader />', () => {
  it('renders default loader state and accessibility label', () => {
    render(<Loader />);

    expect(screen.getByRole('status', { name: 'Cargando...' })).toBeInTheDocument();
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(screen.getByTestId('logo')).toHaveAttribute('data-size', 'md');
  });

  it('renders custom label, size and fullscreen variant', () => {
    render(<Loader label="Cargando datos" size="lg" fullScreen />);

    const status = screen.getByRole('status', { name: 'Cargando datos' });
    expect(status.className).toContain('min-h-screen');
    expect(screen.getByTestId('logo')).toHaveAttribute('data-size', 'lg');
    expect(screen.getByTestId('logo')).toHaveAttribute('data-tone', 'primary');
  });
});
