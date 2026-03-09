import { useEffect, useState } from 'react';

export const useDocumentElement = (elementId: string): HTMLElement | null => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady ? document.getElementById(elementId) : null;
};
