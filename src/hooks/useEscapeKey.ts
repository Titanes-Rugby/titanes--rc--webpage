import { useEffect } from 'react';

type EscapeKeyHandler = () => void;

/**
 * Un custom hook que ejecuta un callback cuando se presiona la tecla 'Escape'.
 * @param handler - La función a ejecutar al presionar 'Escape'.
 * @param isActive - (Opcional) El listener solo estará activo si es true. Por defecto es true.
 */
export const useEscapeKey = (handler: EscapeKeyHandler, isActive: boolean = true) => {
  useEffect(() => {
    // Si el hook no está activo, no hacemos nada.
    // Esto previene que se añada el listener si el modal/drawer está cerrado.
    if (!isActive) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    // Añadimos el event listener al objeto window
    window.addEventListener('keydown', handleKeyDown);

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    // o cuando las dependencias (handler, isActive) cambian.
    // Es crucial para evitar memory leaks.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, isActive]); // Las dependencias del efecto
};
