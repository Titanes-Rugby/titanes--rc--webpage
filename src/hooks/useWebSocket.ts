import { useEffect, useCallback } from 'react';

import { authBridge } from '@/lib/authBridge';

export interface SocketHandlers<T> {
  onOpen?: (ev: WebSocketEventMap['open']) => void;
  onClose?: (ev: WebSocketEventMap['close']) => void;
  onMessage?: (data: T) => void;
  onError?: (ev: WebSocketEventMap['error']) => void;
}

const SOCKET_EVENT = {
  OPEN: 'OPEN',
  MESSAGE: 'MESSAGE',
  CLOSE: 'CLOSE',
  ERROR: 'ERROR',
};

type SocketEvent = (typeof SOCKET_EVENT)[keyof typeof SOCKET_EVENT];

export function useWebSocket(url: string, handlers: SocketHandlers<any> = {}, debug = false): void {
  const logger = useCallback(
    (v: any, type: SocketEvent) => {
      if (debug && import.meta.env.NODE_ENV === 'development') {
        console.group(`⚙️ [UseSocket Event]: ${type}`);
        console.log(v);
        console.groupEnd();
      }
    },
    [debug],
  );

  useEffect(() => {
    // TBD: Define how to test this
    if (import.meta.env.NODE_ENV !== 'test') {
      if (url === '') {
        throw new Error('Missing parameters to use the useSocket hook');
      }
      const socket = new WebSocket(`${url}?token=${authBridge.authHeader?.replace('Bearer ', '').trim()}`);

      const handleOpen = (ev: Event) => {
        logger(ev, SOCKET_EVENT.OPEN);
        handlers.onOpen && handlers.onOpen(ev);
      };
      const handleMessage = (ev: MessageEvent) => {
        logger(ev, SOCKET_EVENT.MESSAGE);
        handlers.onMessage && handlers.onMessage(JSON.parse(ev.data));
      };
      const handleClose = (ev: CloseEvent) => {
        logger(ev, SOCKET_EVENT.CLOSE);
        handlers.onClose && handlers.onClose(ev);
      };
      const handleError = (ev: Event) => {
        logger(ev, SOCKET_EVENT.ERROR);
        handlers.onError && handlers.onError(ev);
      };
      const handleShutdown = (ev: WindowEventMap['beforeunload']) => {
        logger(ev, SOCKET_EVENT.CLOSE);
        socket.close();
      };

      socket.addEventListener('open', handleOpen);
      socket.addEventListener('error', handleError);
      socket.addEventListener('message', handleMessage);
      socket.addEventListener('close', handleClose);

      window.addEventListener('beforeunload', handleShutdown);

      return () => {
        socket.removeEventListener('open', handleOpen);
        socket.removeEventListener('error', handleError);
        socket.removeEventListener('message', handleMessage);
        socket.removeEventListener('close', handleClose);

        window.removeEventListener('beforeunload', handleShutdown);

        socket.close();
      };
    }
  }, [url, handlers, logger]);
}
