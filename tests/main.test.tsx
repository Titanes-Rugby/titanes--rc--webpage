import { describe, expect, it, vi } from 'vitest';

describe('main entrypoint', () => {
  it('creates a root and renders the app', async () => {
    const renderMock = vi.fn();
    const createRootMock = vi.fn(() => ({ render: renderMock }));

    vi.doMock('react-dom/client', () => ({
      default: {},
      createRoot: createRootMock,
    }));

    document.body.innerHTML = '<div id="root"></div>';
    await import('@/main');

    expect(createRootMock).toHaveBeenCalledWith(document.getElementById('root'));
    expect(renderMock).toHaveBeenCalledTimes(1);
  }, 15000);
});
