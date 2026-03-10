import { useCallback } from 'react';

import { useUser } from './useUser';

export function useIsMe(userId?: string) {
  const { user } = useUser();

  const checkUserId = useCallback((userId?: string) => user?.id === userId, [user?.id]);
  const isMe = checkUserId(userId);
  return { isMe, checkUserId };
}
