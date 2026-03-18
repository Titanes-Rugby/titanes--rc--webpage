import { Link } from 'react-router-dom';

const TITANES = { name: 'Titanes', logoSrc: '/images/logo.svg' };

const MATCHES = [
	{
		rival: 'Lobos RFC',
		rivalLogo: '/images/logo.svg',
		date: 'Sabado 14 - 16:00',
		place: 'Cancha Titanes',
		mapUrl: 'https://www.google.com/maps/search/Cancha+Titanes',
	},
	{
		rival: 'Jaguares RC',
		rivalLogo: '/images/logo.svg',
		date: 'Domingo 22 - 15:30',
		place: 'Estadio Nacional',
		mapUrl: 'https://www.google.com/maps/search/Estadio+Nacional+Panama',
	},
	{
		rival: 'Warriors XV',
		rivalLogo: '/images/logo.svg',
		date: 'Sabado 29 - 17:00',
		place: 'Cancha Titanes',
		mapUrl: 'https://www.google.com/maps/search/Cancha+Titanes',
	},
];

const FixtureSection = () => {
	return (
		<section id="fixture" className="bg-white py-20">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Fixture</p>
				<h2 className="mt-3 text-3xl font-semibold text-primary-900 sm:text-4xl">Proximos partidos</h2>
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{MATCHES.map((match) => (
						<article
							key={`${match.rival}-${match.date}`}
							className="rounded-2xl border border-primary-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
						>
							<p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">{match.date}</p>
							<div className="mt-3 flex items-center gap-3">
								<TeamBadge name={TITANES.name} logoSrc={TITANES.logoSrc} />
								<span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">vs</span>
								<TeamBadge name={match.rival} logoSrc={match.rivalLogo} logoAfter />
							</div>
							{match.mapUrl ? (
								<a
									href={match.mapUrl}
									target="_blank"
									rel="noreferrer"
									className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-700 transition hover:border-primary-400 hover:bg-white"
								>
									<span>{match.place}</span>
								</a>
							) : (
								<p className="mt-3 text-sm font-semibold text-primary-800">{match.place}</p>
							)}
						</article>
					))}
				</div>
				<Link
					to="/fixture"
					className="mt-8 inline-flex rounded-xl bg-primary-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-primary-800"
				>
					Ver fixture completo
				</Link>
			</div>
		</section>
	);
};

type TeamBadgeProps = {
	name: string;
	logoSrc?: string;
	logoAfter?: boolean;
};

const TeamBadge = ({ name, logoSrc, logoAfter }: TeamBadgeProps) => (
	<div className="flex items-center gap-2">
		{!logoAfter ? (
			<>
				<LogoCircle logoSrc={logoSrc} name={name} />
				<span className="text-sm font-semibold text-primary-900">{name}</span>
			</>
		) : (
			<>
				<span className="text-sm font-semibold text-primary-900">{name}</span>
				<LogoCircle logoSrc={logoSrc} name={name} />
			</>
		)}
	</div>
);

const LogoCircle = ({ logoSrc, name }: { logoSrc?: string; name: string }) => (
	<span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary-100 bg-primary-50 p-1.5">
		{logoSrc ? (
			<img src={logoSrc} alt={`Logo ${name}`} className="h-full w-full object-contain" />
		) : (
			<span className="text-xs font-bold text-primary-700">
				{name
					.split(' ')
					.filter(Boolean)
					.slice(0, 2)
					.map((part) => part[0]?.toUpperCase())
					.join('')}
			</span>
		)}
	</span>
);

export default FixtureSection;
