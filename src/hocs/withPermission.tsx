import React, { type ReactNode } from 'react';
import { useUserPermissions } from '../hooks/useUserPermissions';

interface PermissionCheckOptions {
  permissions?: string | string[];
  roles?: string | string[];
  entityType?: string;
  entityId?: string;
}

interface PermissionGuardProps extends PermissionCheckOptions {
  children: ReactNode;
  fallback?: ReactNode;
  loadingComponent?: ReactNode;
}

/**
 * A component that renders its children only if the current user has the required permissions.
 *
 * @example
 * <PermissionGuard permissions="edit_post">
 *   <EditButton />
 * </PermissionGuard>
 *
 * @example
 * <PermissionGuard roles="admin" fallback={<div>Not an admin</div>}>
 *   <AdminDashboard />
 * </PermissionGuard>
 */
export const PermissionGuard = ({ children, fallback = null, loadingComponent = null, ...permissionOptions }: PermissionGuardProps) => {
  const { can, isLoading } = useUserPermissions();

  if (isLoading) {
    return <>{loadingComponent}</>;
  }

  const { permissions, roles, entityType, entityId } = permissionOptions;
  const hasAccess = can(permissions, roles, entityType, entityId);

  return <>{hasAccess ? children : fallback}</>;
};

interface WithPermissionProps extends PermissionCheckOptions {
  entityId?: string;
  [key: string]: any;
}

/**
 * A Higher-Order Component that wraps a component and only renders it if the
 * user has the required permissions.
 * @deprecated Prefer using the `<PermissionGuard>` component for better composition.
 */

export const withPermission = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: Omit<PermissionCheckOptions, 'entityId'> = {},
  FallbackComponent: React.ReactNode = null,
) => {
  const PermissionHOC: React.FC<P & WithPermissionProps> = (props) => {
    const { can, isLoading } = useUserPermissions();

    // Combine options from HOC factory and props passed to the rendered component
    const { permissions, roles, entityType, entityId, ...restProps } = props;
    const checkOptions = {
      permissions: permissions ?? options.permissions,
      roles: roles ?? options.roles,
      entityType: entityType ?? options.entityType,
      entityId: entityId,
    };

    options = { permissions, roles, entityType, ...options };

    if (isLoading) {
      return null; // Or a loading spinner
    }

    const hasAccess = can(checkOptions.permissions, checkOptions.roles, checkOptions.entityType, checkOptions.entityId);

    if (!hasAccess) {
      return <>{FallbackComponent}</>;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };

  PermissionHOC.displayName = `withPermission(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return PermissionHOC;
};
