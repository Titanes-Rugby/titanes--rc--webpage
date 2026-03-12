import { describe, expect, it, vi } from 'vitest';

import { getRouteErrorMessage } from '@/routers/utils/getRouteErrorMessage';

const mocks = vi.hoisted(() => ({
  isRouteErrorResponse: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  isRouteErrorResponse: mocks.isRouteErrorResponse,
}));

describe('getRouteErrorMessage', () => {
  it('returns formatted message for route error responses', () => {
    mocks.isRouteErrorResponse.mockReturnValue(true);
    const message = getRouteErrorMessage({ status: 404, statusText: 'Not Found' });

    expect(message).toEqual({
      eyebrow: 'Error 404',
      title: 'No se pudo cargar la pagina',
      description: 'Not Found',
    });
  });

  it('returns fallback message for unknown errors', () => {
    mocks.isRouteErrorResponse.mockReturnValue(false);
    const message = getRouteErrorMessage(new Error('boom'));

    expect(message).toEqual({
      eyebrow: 'Error inesperado',
      title: 'Algo salio mal al cargar la pagina',
      description: '',
    });
  });
});
