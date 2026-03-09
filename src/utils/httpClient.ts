import axios from 'axios';
import { authBridge } from '@/lib/authBridge';

import { removeEmptyValues } from '@/utils/object';

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestConfig<TData = unknown> = {
  url?: string;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';
  params?: unknown;
  data?: TData;
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  signal?: AbortSignal;
  headers?: AxiosRequestConfig['headers'];
  onUploadProgress?: AxiosRequestConfig['onUploadProgress'];
};

export type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
  headers?: AxiosResponse['headers'];
};

export type ResponseErrorConfig<TError = unknown> = AxiosError<TError>;

const PERMITED_ERROR_END_POINTS = ['/api/v1/auth/token', '/api/v1/auth/refresh'];
let refreshPromise: Promise<string | null> | null = null;

const apiHost = import.meta.env?.VITE_API_HOST ?? process.env.VITE_API_HOST;

export const axiosInstance = axios.create({
  baseURL: apiHost,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30000,
});

// Set up request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    if (authBridge.authHeader) {
      config.headers.Authorization = authBridge.authHeader;
    }
    if (config.data) {
      if (config.data instanceof FormData) {
        return config;
      }
      config.data = removeEmptyValues(config.data);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Set up response interceptor for handling auth errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config as (AxiosRequestConfig & { _retry?: boolean }) | undefined;
    const requestUrl = originalRequest?.url;
    if (!axios.isCancel(error)) {
        console.log('error', error);
        console.log('error', error.stack);
    }

    if (error.response?.status === 401 && !PERMITED_ERROR_END_POINTS.includes(requestUrl ?? '')) {
      if (!authBridge.refreshAuth || originalRequest?._retry) {
        authBridge.signOut();
        return Promise.reject(error);
      }

      if (originalRequest) {
        originalRequest._retry = true;
      }

      if (!refreshPromise) {
        refreshPromise = authBridge
          .refreshAuth()
          .catch(() => null)
          .finally(() => {
            refreshPromise = null;
          });
      }

      const newToken = await refreshPromise;
      if (newToken && originalRequest) {
        originalRequest.headers = {
          ...(originalRequest.headers ?? {}),
          Authorization: `Bearer ${newToken}`,
        };
        return axiosInstance.request(originalRequest);
      }

      authBridge.signOut();
    }
    return Promise.reject(error);
  },
);

const client = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
  const requestConfig: AxiosRequestConfig = { ...config };

  // Handle FormData - let browser set Content-Type with correct boundary
  if (requestConfig.data instanceof FormData) {
    requestConfig.headers = {
      ...requestConfig.headers,
      'Content-Type': null, // null removes the header in axios
    };
  }

  const promise = axiosInstance.request<TVariables, ResponseConfig<TData>>(requestConfig).catch((e: AxiosError<TError>) => {
    throw e;
  });

  return promise;
};

export default client;
