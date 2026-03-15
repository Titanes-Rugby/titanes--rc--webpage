import { describe, expect, it, vi } from 'vitest';

describe('features config', () => {
  it('enables beta dashboard and non-production dashboard flags in dev hosts', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_ENABLE_BETA', 'true');
    vi.stubEnv('VITE_API_HOST', 'https://dev.api.example.com');

    const { FEATURE, FEATURE_FLAGS, Features, isFeatureEnabled } = await import('@/configs/features');

    expect(FEATURE.BETA_DASHBOARD).toBe('BETA_DASHBOARD');
    expect(FEATURE_FLAGS[FEATURE.BETA_DASHBOARD]).toBe(true);
    expect(FEATURE_FLAGS[FEATURE.DASHBOARD_MY_LISTINGS]).toBe(true);
    expect(Features.getAll()[FEATURE.OPS_CSV_IMPORT]).toBe(true);
    expect(isFeatureEnabled(FEATURE.OPS_MANUAL_DELIVERY)).toBe(true);
  });

  it('disables beta dashboard in production and uses fallback for unknown feature names', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_ENABLE_BETA', 'false');
    vi.stubEnv('VITE_API_HOST', 'https://api.example.com');

    const { FEATURE, FEATURE_FLAGS, Features, isFeatureEnabled } = await import('@/configs/features');

    expect(FEATURE_FLAGS[FEATURE.BETA_DASHBOARD]).toBe(false);
    expect(FEATURE_FLAGS[FEATURE.DASHBOARD_MY_LISTINGS]).toBe(false);
    expect(Features.isEnabled(FEATURE.MAIN_DASHBOARD)).toBe(true);
    expect(isFeatureEnabled('UNKNOWN_FLAG' as never)).toBe(true);
  });
});
