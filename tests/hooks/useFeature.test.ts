import { describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  isEnabledMock: vi.fn(),
}));

vi.mock('@/configs/features', () => ({
  Features: {
    isEnabled: mocks.isEnabledMock,
  },
}));

import { useFeature } from '@/hooks/useFeature';

describe('useFeature', () => {
  it('delegates the feature lookup to Features.isEnabled', () => {
    mocks.isEnabledMock.mockReturnValueOnce(true);
    expect(useFeature('MAIN_DASHBOARD' as never)).toBe(true);
    expect(mocks.isEnabledMock).toHaveBeenCalledWith('MAIN_DASHBOARD');

    mocks.isEnabledMock.mockReturnValueOnce(false);
    expect(useFeature('UI_DARK_MODE' as never)).toBe(false);
    expect(mocks.isEnabledMock).toHaveBeenCalledWith('UI_DARK_MODE');
  });
});
