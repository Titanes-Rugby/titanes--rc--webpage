import { useLocation } from 'react-router-dom';

export const isRouteMatched = (currentPath: string, pattern: string | RegExp): boolean => {
  if (pattern instanceof RegExp) {
    return pattern.test(currentPath);
  }

  const regexString = pattern
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/:[a-zA-Z0-9_]+/g, '([^/]+)');

  const regex = new RegExp(`^${regexString}/?$`);
  return regex.test(currentPath);
};

export const useRouteMatch = (pattern: string | RegExp): boolean => {
  const path_name = useLocation().pathname;

  const currentPath = path_name.split('?')[0];

  return isRouteMatched(currentPath, pattern);
};
