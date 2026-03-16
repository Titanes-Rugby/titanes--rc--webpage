import { Marquee } from '@components/ui';
import { Link } from 'react-router-dom';

import { sponsors } from '@/pages/sponsors/sponsors.data';

const SponsorPill = ({ name, href }: { name: string; href: string }) => (
	<Link
		to={href}
		className="flex h-16 min-w-[11rem] items-center justify-center rounded-xl border border-primary-100 bg-primary-50 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-primary-700 hover:shadow-md"
	>
		{name}
	</Link>
);

const SponsorsSection = () => {
	return (
		<section id="patrocinadores" className="bg-white py-14">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="mb-6 text-left text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
					Patrocinadores
				</p>
				<Marquee
					items={sponsors}
					renderItem={(sponsor) => (
						<SponsorPill name={sponsor.name} href={`/patrocinadores#${sponsor.id}`} />
					)}
				/>
				<Link
					to="/patrocinadores"
					className="mt-6 inline-flex rounded-xl bg-primary-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-primary-800"
				>
					Ver patrocinadores
				</Link>
			</div>
		</section>
	);
};

export default SponsorsSection;
