export function getWebSocketURI(wsPath: string): string {
  const url = new URL(import.meta.env.VITE_API_HOST ?? '');
  const protocol = url.protocol == 'https:' ? 'wss' : 'ws';

  return `${protocol}://${url.host}${wsPath}`;
}
