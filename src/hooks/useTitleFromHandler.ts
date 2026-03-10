import { useMatches } from 'react-router-dom';

export type RootLayoutHandle = {
  key: string;
  title: string;
  description?: string;
  keywords?: string[];
  hasSidebar?: boolean;
  hasTabs?: boolean;
};

export function useTitleFromHandler() {
  const matches = useMatches();
  const routeHandle = matches
    .slice()
    .reverse()
    .find((match) => match.handle as RootLayoutHandle)?.handle as RootLayoutHandle | undefined;

  const title = routeHandle?.title;
  const description = routeHandle?.description;
  // const keywords = routeHandle?.keywords ?? [];
  //
  const hasTabs = routeHandle?.hasTabs;

  return {
    title,
    description,
    hasTabs,
  };
}
