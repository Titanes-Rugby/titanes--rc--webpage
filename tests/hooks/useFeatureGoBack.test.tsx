import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useGoBack } from '@/hooks/useGoBack';

const navigateSpy = vi.fn();
const mockedState: { canGoBack: boolean } = { canGoBack: true };

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateSpy,
  useLocation: () => ({ state: mockedState }),
}));

describe('useGoBack', () => {
  it('navigates back when state allows, otherwise fallback replace', () => {
    const { result } = renderHook(() => useGoBack('/contacto'));

    act(() => result.current());
    expect(navigateSpy).toHaveBeenCalledWith(-1);

    mockedState.canGoBack = false;
    act(() => result.current());
    expect(navigateSpy).toHaveBeenCalledWith('/contacto', { replace: true });
  });
});
