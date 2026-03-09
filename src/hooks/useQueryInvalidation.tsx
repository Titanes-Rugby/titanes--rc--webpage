import { useQueryClient, type QueryKey } from '@tanstack/react-query';

export function useQueryInvalidation<T extends QueryKey = QueryKey>() {
  const queryClient = useQueryClient();

  return async (queryKeys: Array<T>) => {
    await Promise.all(queryKeys.map((queryKey) => queryClient.invalidateQueries({ queryKey })));
  };
}
