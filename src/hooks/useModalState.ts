import { useState } from 'react';

export function useModalState<T>(clearValue: T, initialState?: T) {
  const [state, setState] = useState<T | null | undefined>(initialState);

  const onOpen = (el: T) => {
    setState(el);
    // document.body.classList.add('overflow-hidden');
  };

  const onClose = () => {
    // document.body.classList.remove('overflow-hidden');
    setState(clearValue);
  };

  return { state, onOpen, onClose };
}
