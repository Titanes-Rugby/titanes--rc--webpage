import { Marquee } from '@components/ui';

const SPONSORS = ['Sponsor A', 'Sponsor B', 'Sponsor C', 'Sponsor D', 'Sponsor E', 'Sponsor F'];

const SponsorPill = ({ name }: { name: string }) => (
	<div
		className="flex h-16 min-w-[11rem] items-center justify-center rounded-xl border border-titanes-100 bg-titanes-50 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-titanes-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-titanes-700 hover:shadow-md"
	>
		{name}
	</div>
);

const SponsorsSection = () => {
	return (
		<section id="patrocinadores" className="bg-white py-14">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="mb-6 text-left text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">
					Patrocinadores
				</p>
				<Marquee items={SPONSORS} renderItem={(sponsor) => <SponsorPill name={sponsor} />} />
			</div>
		</section>
	);
};

export default SponsorsSection;
