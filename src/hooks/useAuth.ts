import { useEffect, useCallback } from 'react';

import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';

import { MAIN_PATH } from '@/configs/app';
import { authBridge } from '@lib/authBridge';

import { toast } from '@/hooks/useToast';

import { useLoginApiV1AuthTokenPost } from '@api-hooks/authentication/useLoginApiV1AuthTokenPost';
import { type LoginApiV1AuthTokenPost200 } from '@api-types/LoginApiV1AuthTokenPost';

import { useAcceptInvitationApiV1InvitationsAcceptCodePost } from '@api-hooks/invitations/useAcceptInvitationApiV1InvitationsAcceptCodePost';

import { type InvitationValidation } from '@api-types/InvitationValidation';
import { type LoginInput } from '@api-types/LoginInput';

type LoginInputWithCarePlan = LoginInput & {
  care_plan?: Record<string, unknown>;
};

// export enum UserRole {
// 	ADMIN = "admin",
// 	DOCTOR = "doctor",
// 	SECRETARY = "secretary",
// 	PATIENT = "patient",
// }

// export type SupportedUserRole = Exclude<UserRole, UserRole.PATIENT>;

// export const SUPPORTED_ROLES: SupportedUserRole[] = [
// 	UserRole.ADMIN,
// 	UserRole.DOCTOR,
// 	UserRole.SECRETARY,
// ] as const;

// export const DEFAULT_ROUTES: Record<SupportedUserRole, string> = {
// 	[UserRole.ADMIN]: "/admin/general",
// 	[UserRole.DOCTOR]: "/doctor",
// 	[UserRole.SECRETARY]: "/secretary",
// };
//

type Data = {
  socialToken?: LoginApiV1AuthTokenPost200;
  invitation?: InvitationValidation;
};

export const useAuth = () => {
  const user = useAuthUser<LoginApiV1AuthTokenPost200>();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const reactAuthSignIn = useSignIn();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const data = useLoaderData<Data>();

  const location = useLocation();
  const { mutateAsync: createToken, isPending: createTokenPending } = useLoginApiV1AuthTokenPost<LoginApiV1AuthTokenPost200>();
  const { mutateAsync: acceptInvitation } = useAcceptInvitationApiV1InvitationsAcceptCodePost({
    mutation: {
      onSuccess: () => {
        toast({
          title: 'Invitation accepted',
          description: 'You have successfully accepted the invitation',
          variant: 'success',
        });
      },
      onError: () => {
        toast({
          title: 'Failed to accept invitation',
          description: 'An error occurred while accepting the invitation',
          variant: 'error',
        });
      },
    },
  });

  const fromPath = location.state?.from?.pathname;

  const autenticate = useCallback(
    async (tokenResponse: LoginApiV1AuthTokenPost200) => {
      if (
        reactAuthSignIn({
          auth: {
            token: tokenResponse.access_token,
            type: 'Bearer',
          },
          refresh: tokenResponse.refresh_token,
          userState: tokenResponse, // Store the entire user object
        })
      ) {
        authBridge.setAuthHeader(`Bearer ${tokenResponse.access_token}`);

        if (data?.invitation) {
          await acceptInvitation({
            code: data.invitation.invitation?.code || '',
          });
        }
        queryClient.clear();

        // Successfully logged in, redirect to the role-based redirect page
        await navigate(tokenResponse.path_redirect_to ?? MAIN_PATH, { replace: true, state: { next: tokenResponse.path_redirect_to ?? MAIN_PATH } });

        return { success: true, redirect: tokenResponse.path_redirect_to ?? MAIN_PATH };
      } else {
        return { success: false, error: 'Failed to sign in' };
      }
    },
    [queryClient, reactAuthSignIn, data, acceptInvitation, navigate],
  );

  const login = async (credentials: LoginInputWithCarePlan) => {
    try {
      // Call the Kubb-generated hook to create a token
      const tokenResponse = await createToken({
        data: {
          email: credentials.email,
          password: credentials.password,
          ...(credentials.care_plan && { care_plan: credentials.care_plan }),
        },
      });

      // Store the authentication data using React Auth Kit
      return autenticate(tokenResponse);
    } catch (error) {
      return { success: false, error: (error as AxiosError<{ error: string }, any>).response?.data?.error ?? 'Invalid credentials' };
    }
  };

  const logout = () => {
    signOut();
    queryClient.clear();
    navigate('/auth/signin');
  };

  useEffect(() => {
    if (data?.socialToken) {
      autenticate(data.socialToken);
    }
  }, [autenticate, data]);

  return {
    login,
    logout,
    user,
    accessToken: user?.access_token,
    isAuthenticated,
    autenticate,
    isPending: createTokenPending,
  };
};
