import { beforeEach, describe, expect, it, vi } from 'vitest';

const requestUse = vi.fn();
const responseUse = vi.fn();
const requestMock = vi.fn();

vi.mock('axios', () => {
  return {
    default: {
      create: vi.fn(() => ({
        interceptors: {
          request: { use: requestUse },
          response: { use: responseUse },
        },
        request: requestMock,
      })),
      isCancel: vi.fn(() => false),
    },
  };
});

describe('httpClient', () => {
  beforeEach(() => {
    vi.resetModules();
    requestUse.mockClear();
    responseUse.mockClear();
    requestMock.mockReset();
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
  });

  it('registers interceptors and sanitizes request data', async () => {
    await import('@/utils/httpClient');
    const onRequest = requestUse.mock.calls[0][0] as (config: any) => any;
    const onRequestError = requestUse.mock.calls[0][1] as (error: unknown) => Promise<unknown>;

    const next = onRequest({ data: { a: 1, b: undefined } });
    expect(next.data).toEqual({ a: 1 });

    const interceptorError = new Error('request interceptor error');
    await expect(onRequestError(interceptorError)).rejects.toBe(interceptorError);
  });

  it('passes through empty requests and form-data payloads', async () => {
    await import('@/utils/httpClient');
    const onRequest = requestUse.mock.calls[0][0] as (config: any) => any;

    const emptyConfig = { url: '/x' };
    expect(onRequest(emptyConfig)).toBe(emptyConfig);

    const formDataConfig = { data: new FormData() };
    expect(onRequest(formDataConfig)).toBe(formDataConfig);
  });

  it('marks retry on 401 for non permitted endpoints', async () => {
    await import('@/utils/httpClient');
    const onResponseError = responseUse.mock.calls[0][1] as (error: any) => Promise<unknown>;
    const error = { response: { status: 401 }, config: { url: '/api/v1/private' } };

    await expect(onResponseError(error)).rejects.toBe(error);
    expect(error.config._retry).toBe(true);
  });

  it('does not mark retry for permitted endpoints or non-401 responses', async () => {
    await import('@/utils/httpClient');
    const onResponseSuccess = responseUse.mock.calls[0][0] as (response: unknown) => unknown;
    const onResponseError = responseUse.mock.calls[0][1] as (error: any) => Promise<unknown>;
    const permittedError = { response: { status: 401 }, config: { url: '/api/v1/auth/token' } };
    const serverError = { response: { status: 500 }, config: { url: '/api/v1/private' } };

    expect(onResponseSuccess({ ok: true })).toEqual({ ok: true });

    await expect(onResponseError(permittedError)).rejects.toBe(permittedError);
    await expect(onResponseError(serverError)).rejects.toBe(serverError);
    expect((permittedError.config as any)._retry).toBeUndefined();
    expect((serverError.config as any)._retry).toBeUndefined();
  });

  it('handles 401 errors without request config safely', async () => {
    await import('@/utils/httpClient');
    const onResponseError = responseUse.mock.calls[0][1] as (error: any) => Promise<unknown>;
    const unauthorizedWithoutConfig = { response: { status: 401 } };

    await expect(onResponseError(unauthorizedWithoutConfig)).rejects.toBe(unauthorizedWithoutConfig);
    expect((unauthorizedWithoutConfig as any).config).toBeUndefined();
  });

  it('skips error logging for cancelled requests', async () => {
    const { default: axios } = await import('axios');
    (axios.isCancel as unknown as ReturnType<typeof vi.fn>).mockReturnValueOnce(true);

    await import('@/utils/httpClient');
    const onResponseError = responseUse.mock.calls[0][1] as (error: any) => Promise<unknown>;
    const cancelledError = { response: { status: 499 }, config: { url: '/api/v1/private' } };
    (console.log as unknown as ReturnType<typeof vi.fn>).mockClear();

    await expect(onResponseError(cancelledError)).rejects.toBe(cancelledError);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('sends form-data requests with content-type removed', async () => {
    const { default: client } = await import('@/utils/httpClient');
    requestMock.mockResolvedValue({ data: { ok: true }, status: 200, statusText: 'OK' });
    const fd = new FormData();
    fd.append('file', new Blob(['x']), 'x.txt');

    await client({ method: 'POST', url: '/upload', data: fd });

    expect(requestMock).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining({ 'Content-Type': null }),
      }),
    );
  });

  it('rethrows request errors from client catch block', async () => {
    const { default: client } = await import('@/utils/httpClient');
    const requestError = new Error('request failed');
    requestMock.mockRejectedValue(requestError);

    await expect(client({ method: 'GET', url: '/broken' })).rejects.toBe(requestError);
  });
});
