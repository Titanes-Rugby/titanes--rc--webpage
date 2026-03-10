import { useMemo } from 'react';
import { useQuery, type UseQueryResult, type UseQueryOptions, type QueryKey } from '@tanstack/react-query';

export function useConditionalQuery<S, N, R>(
  condition: boolean,
  successOptions: UseQueryOptions<S>,
  negativeOptions: UseQueryOptions<N>,
  mapFn: (data?: S | N) => R,
): UseQueryResult<R> & { data: R | undefined; queryKey: QueryKey } {
  const successQueryResult = useQuery<S>({
    ...successOptions,
    enabled: condition && (successOptions.enabled ?? true),
  });

  const negativeQueryResult = useQuery<N>({
    ...negativeOptions,
    enabled: !condition && (negativeOptions.enabled ?? true),
  });

  const queryKey: QueryKey = condition ? successOptions.queryKey : negativeOptions.queryKey;

  const finalResult = condition ? successQueryResult : negativeQueryResult;
  const dataToMap = condition ? successQueryResult.data : negativeQueryResult.data;

  const mappedData = useMemo(() => {
    return mapFn(dataToMap as S | N | undefined);
  }, [dataToMap, mapFn]);

  return {
    ...(finalResult as UseQueryResult<R>),
    data: mappedData,
    queryKey,
  } as UseQueryResult<R> & { data: R | undefined; queryKey: QueryKey };
}
