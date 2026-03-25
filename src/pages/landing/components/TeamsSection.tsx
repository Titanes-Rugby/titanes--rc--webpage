import { WithBackground } from '@components/Parallax';

const TEAMS = [
	{
		title: 'Titanes',
		href: '/equipos/primera-division',
		description: 'Plantel principal masculino que compite en liga nacional con enfoque en alto rendimiento.',
	},
	{
		title: 'Titanides',
		href: '/equipos/femenino',
		description: 'Equipo femenino competitivo con calendario nacional y torneos regionales.',
	},
	{
		title: 'Titanes Juveniles',
		href: '/equipos/juveniles',
		description: 'Programa de desarrollo U18-U20 para formar talento y proyectarlo al plantel mayor.',
	},
];

const TeamsSection = () => {
	return (
		<WithBackground
			id="equipos"
			backgroundClassName="bg-primary-50 dark:bg-primary-950"
			className="py-20"
			overlayClassName="bg-transparent"
		>
			<div className="mx-auto w-full max-w-6xl px-6">
				<div className="mb-10 flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-primary-400">
							Equipos
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-primary-900 dark:text-primary-100 sm:text-4xl">
							Categorias competitivas del club
						</h2>
					</div>
					<a
						href="/equipos"
						className="rounded-xl border border-primary-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-700 transition-colors hover:bg-primary-100 dark:border-primary-700 dark:text-primary-200 dark:hover:bg-primary-800"
					>
						Ver todos los planteles
					</a>
				</div>
				<div className="grid gap-5 md:grid-cols-3">
					{TEAMS.map((team) => (
						<article
							key={team.title}
							className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm dark:border-primary-800 dark:bg-primary-900"
						>
							<h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">{team.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-primary-700 dark:text-primary-300">{team.description}</p>
							<a
								href={team.href}
								className="mt-6 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-primary-700 dark:bg-primary-100 dark:text-primary-900 dark:hover:bg-white"
							>
								Ver calendario
							</a>
						</article>
					))}
				</div>
			</div>
		</WithBackground>
	);
};

export default TeamsSection;
