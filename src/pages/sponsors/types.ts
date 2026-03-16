export type SponsorTier = 'main' | 'gold' | 'support';

export type SponsorItem = {
  id: string;
  name: string;
  tier: SponsorTier;
  category: string;
  summary: string;
  url?: string;
  logoSrc?: string;
};
