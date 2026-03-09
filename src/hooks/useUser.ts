import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

import { type AuthResponse } from '@/api/__generated__/types/AuthResponse';

export const useUser = () => {
  const user = useAuthUser<AuthResponse>();
  const isAuthenticated = useIsAuthenticated();

  return {
    user,
    isAuthenticated,
  };
};
