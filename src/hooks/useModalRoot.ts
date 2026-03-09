import { useEffect, useState } from 'react';

export function useModalRoot(nodeId: string) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let root = document.getElementById(nodeId);

    if (!root) {
      root = document.createElement('div');
      root.id = nodeId;
      document.body.appendChild(root);
    }
    setModalRoot(root);

    return () => {
      // Intentionally left empty to prevent removing the shared modal root
      // accessing it by multiple components would cause race conditions if removed
    };
  }, [nodeId]);

  return modalRoot;
}
