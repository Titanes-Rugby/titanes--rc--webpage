import { Link } from 'react-router-dom';

const MATCHES = [
	{ rival: 'Lobos RFC', date: 'Sabado 14 - 16:00', place: 'Cancha Titanes' },
	{ rival: 'Jaguares RC', date: 'Domingo 22 - 15:30', place: 'Estadio Nacional' },
	{ rival: 'Warriors XV', date: 'Sabado 29 - 17:00', place: 'Cancha Titanes' },
];

const FixtureSection = () => {
	return (
		<section id="fixture" className="bg-white py-20">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Fixture</p>
				<h2 className="mt-3 text-3xl font-semibold text-primary-900 sm:text-4xl">Proximos partidos</h2>
				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{MATCHES.map((match) => (
						<article key={`${match.rival}-${match.date}`} className="rounded-2xl border border-primary-100 p-6">
							<p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">{match.date}</p>
							<h3 className="mt-2 text-xl font-semibold text-primary-900">vs {match.rival}</h3>
							<p className="mt-2 text-sm text-primary-700">{match.place}</p>
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

export default FixtureSection;
