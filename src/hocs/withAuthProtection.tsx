import React from 'react';

import { useUser } from '@hooks/useUser';
import { useAuthRequiredStore } from '@stores/authRequiredStore';

interface WithOnClick {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  [key: string]: any;
}

export function withAuthProtection<P extends WithOnClick>(WrappedComponent: React.ComponentType<P>) {
  const ProtectedComponent = (props: P) => {
    const { openAuthModal } = useAuthRequiredStore();
    const { isAuthenticated } = useUser();

    const handleProtectedClick = (e: React.MouseEvent<HTMLElement>) => {
      if (!isAuthenticated) {
        e.preventDefault(); // Detiene la navegación (si es un Link o <a>)
        e.stopPropagation(); // Detiene la propagación del evento
        console.log('🚫 Usuario no logueado. Interceptando acción.');

        openAuthModal(props.from);
        return;
      }

      if (props.onClick) {
        props.onClick(e);
      }
    };

    return <WrappedComponent {...props} onClick={handleProtectedClick} />;
  };

  return ProtectedComponent;
}
