import { describe, expect, it, vi } from 'vitest';

describe('main entrypoint', () => {
  it('creates a root and renders the app', async () => {
    const renderMock = vi.fn();
    const createRootMock = vi.fn(() => ({ render: renderMock }));
    const appMock = vi.fn(() => null);

    vi.doMock('react-dom/client', () => ({
      default: {},
      createRoot: createRootMock,
    }));
    vi.doMock('@/App', () => ({
      __esModule: true,
      default: appMock,
    }));

    document.body.innerHTML = '<div id="root"></div>';
    await import('@/main');

    expect(createRootMock).toHaveBeenCalledWith(document.getElementById('root'));
    expect(renderMock).toHaveBeenCalledTimes(1);
  }, 30000);
});
