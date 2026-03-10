import { useCallback } from 'react';

import { useGetMyPermissionsApiV1PermissionsMyPermissionsGet } from '@api-hooks/permissions/useGetMyPermissionsApiV1PermissionsMyPermissionsGet';

const hasMatch = (userItems: string[] = [], requiredItems: string[] = []) => {
  if (requiredItems.length === 0) return false;
  return requiredItems.some((req) => userItems.includes(req));
};

const toArray = (input?: string | string[]) => {
  if (!input) return [];
  return Array.isArray(input) ? input : [input];
};

export const useUserPermissions = () => {
  const { data, isLoading, isError, error } = useGetMyPermissionsApiV1PermissionsMyPermissionsGet({
    query: {
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  });

  const can = useCallback(
    (requiredPermissions?: string | string[], requiredRoles?: string | string[], entityType?: string, entityId?: string): boolean => {
      if (!data || !data.summary) return false;

      const { summary } = data;
      const neededPerms = toArray(requiredPermissions);
      const neededRoles = toArray(requiredRoles);

      if (summary.global_roles?.includes('admin')) return true;

      if (hasMatch(summary.global_roles, neededRoles)) return true;

      if (hasMatch(summary.global_permissions, neededPerms)) return true;

      if (entityType && entityId) {
        const entityGroup = summary.entity_permissions?.[entityType];
        const entityData = entityGroup?.[entityId];

        if (entityData) {
          const userEntityRoleNames = entityData.roles.map((r) => r.name);
          if (hasMatch(userEntityRoleNames, neededRoles)) return true;

          if (hasMatch(entityData.permissions, neededPerms)) return true;
        }
      }

      return false;
    },
    [data],
  );

  return { can, isLoading, isError, error };
};
