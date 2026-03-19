import { Marquee } from '@components/ui';

import type { SponsorItem } from '../types';

type SponsorsMarqueeProps = {
  sponsors: SponsorItem[];
};

const SponsorsMarquee = ({ sponsors }: SponsorsMarqueeProps) => {
  return (
    <div className="rounded-2xl border border-primary-100 bg-white p-4">
      <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">Patrocinadores</p>
      <Marquee
        items={sponsors}
        renderItem={(sponsor) => (
          <a
            href={`#${sponsor.id}`}
            className="flex h-14 min-w-[11rem] items-center justify-center rounded-xl border border-primary-100 bg-primary-50 px-4 text-xs font-semibold tracking-[0.12em] text-primary-600 uppercase transition hover:border-primary-300 hover:text-primary-800"
          >
            {sponsor.name}
          </a>
        )}
      />
    </div>
  );
};

export default SponsorsMarquee;
