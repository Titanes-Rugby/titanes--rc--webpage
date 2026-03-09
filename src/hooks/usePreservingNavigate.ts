import React from 'react';

import { useNavigate, useSearchParams, type To, type NavigateOptions } from 'react-router-dom';

export const preservedSearch = (to: To, searchParams: URLSearchParams) => {
  if (typeof to === 'number') {
    return to;
  }

  const destinationPathname = typeof to === 'string' ? to.split('?')[0] : (to.pathname ?? '');
  const destinationSearch = typeof to === 'string' ? to.split('?')[1] : to.search;

  const newSearchParams = new URLSearchParams(searchParams);

  const destinationSearchParams = new URLSearchParams(destinationSearch);
  destinationSearchParams.forEach((value, key) => {
    newSearchParams.set(key, value);
  });

  return {
    pathname: destinationPathname,
    search: newSearchParams.toString(),
    hash: typeof to === 'object' ? to.hash : undefined,
  };
};

export const usePreservedSearch = (to: To) => {
  const [currentSearchParams] = useSearchParams();

  return React.useMemo(() => {
    return preservedSearch(to, currentSearchParams);
  }, [to, currentSearchParams]);
};

export const usePreservingNavigate = () => {
  const originalNavigate = useNavigate();

  const [currentSearchParams] = useSearchParams();

  const preservingNavigate = React.useCallback(
    (to: To, options?: NavigateOptions) => {
      const finalTo = preservedSearch(to, currentSearchParams);
      originalNavigate(finalTo, options);
    },
    [originalNavigate, currentSearchParams],
  );

  return preservingNavigate;
};
