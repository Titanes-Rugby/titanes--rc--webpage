import { useEffect, useMemo, useRef } from 'react';
import { useForm, type UseFormReturn, type FieldValues, type DefaultValues } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import type { UseQueryResult, DefaultError } from '@tanstack/react-query';

import type { ResponseErrorConfig } from '@/utils/httpClient';

type QueryHook<TParams extends object, TData, TError> = (params: TParams, options?: any) => UseQueryResult<TData | undefined, ResponseErrorConfig<TError>>;

interface UseDebouncedSearchOptions<TFieldValues extends FieldValues> {
  defaultValues: DefaultValues<TFieldValues>;
  debounceDelay?: number;
  mapParams?: (params: Partial<TFieldValues>) => Partial<TFieldValues>;
  callInitially?: boolean;
}

interface UseDebouncedSearchResult<TFieldValues extends FieldValues = FieldValues, TData = unknown, TError = DefaultError> {
  form: UseFormReturn<TFieldValues, any, TFieldValues>;
  queryParams: Partial<TFieldValues> | null;
  result: UseQueryResult<TData | undefined, ResponseErrorConfig<TError>>;
}

export function useDebouncedSearch<TFieldValues extends FieldValues = FieldValues, TData = unknown, TError = DefaultError>(
  useQueryHook: QueryHook<Partial<TFieldValues>, TData, TError>,
  { defaultValues, debounceDelay = 500, mapParams, callInitially = false }: UseDebouncedSearchOptions<TFieldValues>,
): UseDebouncedSearchResult<TFieldValues, TData, TError> {
  const [searchParams, setSearchParams] = useSearchParams();
  const isInitialMount = useRef(true);

  const formValuesFromUrl = useMemo(() => {
    const params: FieldValues = {};
    searchParams.forEach((value, key) => {
      if (Object.prototype.hasOwnProperty.call(defaultValues, key)) {
        params[key] = value;
      }
    });
    return { ...defaultValues, ...params };
  }, [searchParams, defaultValues]);

  const form = useForm<TFieldValues>({
    values: formValuesFromUrl as TFieldValues,
  });

  const formValues = form.watch();

  useEffect(() => {
    const handler = setTimeout(() => {
      const filteredParams: Record<string, string> = {};
      Object.entries(formValues).forEach(([key, value]) => {
        if (value !== '' && value !== null && value !== undefined) {
          filteredParams[key] = String(value);
        }
      });

      const newSearchParams = new URLSearchParams(filteredParams);
      if (searchParams.toString() !== newSearchParams.toString()) {
        setSearchParams(newSearchParams, { replace: true });
      }
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [formValues, searchParams, setSearchParams, debounceDelay]);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  const queryParamsForHook = useMemo(() => {
    const hasValues = Object.values(formValuesFromUrl).some((v) => v !== '' && v !== null && v !== undefined && v !== false);
    if (!hasValues) return null;

    return mapParams ? mapParams(formValuesFromUrl) : formValuesFromUrl;
  }, [formValuesFromUrl, mapParams]);

  const queryResult = useQueryHook((queryParamsForHook ?? {}) as Partial<TFieldValues>, {
    query: {
      enabled: (callInitially && !isInitialMount.current) || !!queryParamsForHook,
      // keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  });

  return {
    form,
    queryParams: queryParamsForHook,
    result: queryResult,
  };
}
