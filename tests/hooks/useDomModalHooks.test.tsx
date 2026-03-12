import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useDocumentElement } from '@/hooks/useDocumentElement';
import { useModalRoot } from '@/hooks/useModalRoot';
import { useModalState } from '@/hooks/useModalState';

describe('dom and modal hooks', () => {
  it('returns document element after mount', async () => {
    const node = document.createElement('div');
    node.id = 'modal-root-node';
    document.body.appendChild(node);

    const { result } = renderHook(() => useDocumentElement('modal-root-node'));
    expect(result.current).toBe(node);
  });

  it('creates modal root when missing and preserves existing one', () => {
    const { result: created } = renderHook(() => useModalRoot('shared-modal-root'));
    expect(created.current?.id).toBe('shared-modal-root');
    expect(document.getElementById('shared-modal-root')).toBeTruthy();

    const existing = document.createElement('div');
    existing.id = 'already-there';
    document.body.appendChild(existing);

    const { result: reused } = renderHook(() => useModalRoot('already-there'));
    expect(reused.current).toBe(existing);
  });

  it('handles open and close state transitions', () => {
    const { result } = renderHook(() => useModalState<string>('closed', 'initial'));
    expect(result.current.state).toBe('initial');

    act(() => result.current.onOpen('open'));
    expect(result.current.state).toBe('open');

    act(() => result.current.onClose());
    expect(result.current.state).toBe('closed');
  });
});
