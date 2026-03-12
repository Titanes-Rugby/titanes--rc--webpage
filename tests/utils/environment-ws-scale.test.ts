import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('environment dependent utils', () => {
  const originalHeight = window.innerHeight;

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalHeight });
  });

  it('resolves environment flags from VITE_API_HOST', async () => {
    vi.stubEnv('VITE_API_HOST', 'https://dev.api.titanes.local');
    const envDev = await import('@/utils/environment');
    expect(envDev.CURRENT_ENV).toBe('dev');
    expect(envDev.IS_NON_PRODUCTION).toBe(true);

    vi.resetModules();
    vi.stubEnv('VITE_API_HOST', 'https://prod.titanes.com');
    const envProd = await import('@/utils/environment');
    expect(envProd.CURRENT_ENV).toBe('production');
    expect(envProd.IS_NON_PRODUCTION).toBe(false);

    vi.resetModules();
    vi.stubEnv('VITE_API_HOST', 'https://staging.api.titanes.local');
    const envStaging = await import('@/utils/environment');
    expect(envStaging.CURRENT_ENV).toBe('staging');

    vi.resetModules();
    vi.stubEnv('VITE_API_HOST', 'http://127.0.0.1:3000');
    const envLocal = await import('@/utils/environment');
    expect(envLocal.CURRENT_ENV).toBe('local');
  });

  it('builds websocket urls from host protocol', async () => {
    vi.stubEnv('VITE_API_HOST', 'https://api.titanes.com');
    const wsHttps = await import('@/utils/ws');
    expect(wsHttps.getWebSocketURI('/socket')).toBe('wss://api.titanes.com/socket');

    vi.resetModules();
    vi.stubEnv('VITE_API_HOST', 'http://localhost:3000');
    const wsHttp = await import('@/utils/ws');
    expect(wsHttp.getWebSocketURI('/socket')).toBe('ws://localhost:3000/socket');

    vi.resetModules();
    vi.unstubAllEnvs();
    const wsWithoutHost = await import('@/utils/ws');
    expect(() => wsWithoutHost.getWebSocketURI('/socket')).toThrow();
  });

  it('computes scale ratio from current window height at import time', async () => {
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 491 });
    const scale = await import('@/utils/scale');
    expect(scale.scaleRatio).toBe(491 / 982);
  });
});
