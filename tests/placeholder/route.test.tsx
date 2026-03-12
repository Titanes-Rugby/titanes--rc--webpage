import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useLoaderData: () => ({ path: 'fixture', title: 'Fixture' }),
  };
});

import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';
import { Component, ErrorBoundary, loader } from '@/pages/placeholder/route';

describe('placeholder route', () => {
  it('resolves titles in loader for known and fallback paths', async () => {
    await expect(loader({ params: { slug: 'fixture' } })).resolves.toEqual({
      path: 'fixture',
      title: 'Fixture',
    });
    await expect(loader({ params: { group: 'club', slug: 'historia' } })).resolves.toEqual({
      path: 'club/historia',
      title: 'Historia del Club',
    });
    await expect(loader({ params: { group: 'media' } })).resolves.toEqual({
      path: 'media/',
      title: 'Media/',
    });
    await expect(loader({ params: { slug: 'mi-nueva-ruta' } })).resolves.toEqual({
      path: 'mi-nueva-ruta',
      title: 'Mi Nueva Ruta',
    });
    await expect(loader({ params: {} })).resolves.toEqual({
      path: '',
      title: 'Seccion',
    });
  });

  it('renders component with loader data and exports shared boundary', () => {
    render(<Component />);
    expect(screen.getByRole('heading', { name: /Fixture/i })).toBeInTheDocument();
    expect(screen.getByText('fixture')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volver al inicio/i })).toHaveAttribute('href', '/');
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });
});
