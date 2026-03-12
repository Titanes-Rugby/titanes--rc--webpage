import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

const mocks = vi.hoisted(() => ({
  useRouteError: vi.fn(),
  getRouteErrorMessage: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useRouteError: mocks.useRouteError,
}));

vi.mock('@/routers/utils/getRouteErrorMessage', () => ({
  getRouteErrorMessage: mocks.getRouteErrorMessage,
}));

describe('<RouteErrorBoundary />', () => {
  it('renders eyebrow, title and description when provided', () => {
    mocks.useRouteError.mockReturnValue({ status: 500 });
    mocks.getRouteErrorMessage.mockReturnValue({
      eyebrow: 'Error 500',
      title: 'No se pudo cargar la pagina',
      description: 'Server down',
    });

    render(<RouteErrorBoundary />);
    expect(screen.getByText('Error 500')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'No se pudo cargar la pagina' })).toBeInTheDocument();
    expect(screen.getByText('Server down')).toBeInTheDocument();
  });

  it('hides description block when message description is empty', () => {
    mocks.useRouteError.mockReturnValue(new Error('x'));
    mocks.getRouteErrorMessage.mockReturnValue({
      eyebrow: 'Error inesperado',
      title: 'Algo salio mal al cargar la pagina',
      description: '',
    });

    render(<RouteErrorBoundary />);
    expect(screen.getByText('Error inesperado')).toBeInTheDocument();
    expect(screen.queryByText('Server down')).not.toBeInTheDocument();
  });
});
