import { useEffect } from 'react';
import { authBridge } from '@lib/authBridge';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

import { useRefreshTokenApiV1AuthRefreshPost } from '@api-hooks/authentication/useRefreshTokenApiV1AuthRefreshPost';

const REFRESH_COOKIE_NAME = '_auth_refresh';

const readCookie = (name: string) => {
  const escapedName = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const match = document.cookie.match(new RegExp(`(?:^|; )${escapedName}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

/**
 * Hook to initialize and update the auth bridge with current authentication state
 * Should be called once at the app root level
 */
export const useAuthBridge = () => {
  const authHeader = useAuthHeader();
  const signIn = useSignIn();
  const { mutateAsync: refreshToken } = useRefreshTokenApiV1AuthRefreshPost();
  // Keep signOut for potential future use

  console.log('authHeader', authHeader);
  useEffect(() => {
    // Set the auth header value directly
    authBridge.setAuthHeader(authHeader ?? null);

    // Update when the header changes
  }, [authHeader]);

  useEffect(() => {
    // Set the sign out function to navigate to logout route
    // instead of directly signing out
    authBridge.setSignOut(() => {
      // navigate('/auth');
      window.location.href = '/auth';
    });
  }, []);

  useEffect(() => {
    authBridge.setRefreshAuth(async () => {
      const refreshTokenValue = readCookie(REFRESH_COOKIE_NAME);
      if (!refreshTokenValue) return null;

      try {
        const response = await refreshToken({
          data: {
            refresh_token: refreshTokenValue,
          },
        });
        const didSignIn = signIn({
          auth: { token: response.access_token, type: 'Bearer' },
          refresh: response.refresh_token,
          userState: response,
        });
        if (!didSignIn) return null;
        authBridge.setAuthHeader(`Bearer ${response.access_token}`);
        return response.access_token;
      } catch (error) {
        return null;
      }
    });
  }, [refreshToken, signIn]);
};
