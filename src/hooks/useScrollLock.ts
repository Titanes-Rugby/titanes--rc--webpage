import { useEffect } from 'react';

/**
 * Un custom hook que bloquea el scroll del body cuando el cursor del ratón
 * se encuentra sobre el elemento referenciado y lo restaura cuando sale.
 *
 * @param elementRef - Una ref de React adjunta al elemento que debe activar el bloqueo de scroll.
 */
export const useScrollLock = (elementRef: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const element = elementRef.current;

    // Si el elemento no existe, no hacemos nada.
    if (!element) {
      return;
    }

    const handleMouseEnter = () => {
      // Bloqueamos el scroll del body.
      document.body.classList.add('overflow-hidden');
    };

    const handleMouseLeave = () => {
      // Restauramos el valor original de overflow.
      document.body.classList.remove('overflow-hidden');
    };

    // Añadimos los event listeners al elemento.
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Función de limpieza: se ejecuta cuando el componente que usa el hook se desmonta.
    // Es CRUCIAL para evitar memory leaks y comportamientos inesperados.
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);

      // Como medida de seguridad, si el componente se desmonta mientras el ratón
      // está encima, nos aseguramos de que el scroll del body se restaure.
      document.body.classList.remove('overflow-hidden');
    };
  }, [elementRef]); // El efecto se volverá a ejecutar si la ref cambia (poco común, pero es la dependencia correcta).
};
