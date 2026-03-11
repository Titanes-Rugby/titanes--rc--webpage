import { Marquee } from '@components/ui';

type SponsorsMarqueeProps = {
  names: string[];
};

const SponsorsMarquee = ({ names }: SponsorsMarqueeProps) => {
  return (
    <div className="rounded-2xl border border-titanes-100 bg-white p-4">
      <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-titanes-500 uppercase">Wall Of Partners</p>
      <Marquee
        items={names}
        renderItem={(name) => (
          <div className="flex h-14 min-w-[11rem] items-center justify-center rounded-xl border border-titanes-100 bg-titanes-50 px-4 text-xs font-semibold tracking-[0.12em] text-titanes-600 uppercase">
            {name}
          </div>
        )}
      />
    </div>
  );
};

export default SponsorsMarquee;
