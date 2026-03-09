const TEAMS = [
	{
		title: 'Primera Division',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.',
	},
	{
		title: 'Juveniles',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
	},
	{
		title: 'Femenino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.',
	},
];

const TeamsSection = () => {
	return (
		<section id="equipos" className="bg-titanes-50 py-20">
			<div className="mx-auto w-full max-w-6xl px-6">
				<div className="mb-10 flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">Equipos</p>
						<h2 className="mt-3 text-3xl font-semibold text-titanes-900 sm:text-4xl">
							Categorias competitivas del club
						</h2>
					</div>
					<a
						href="#"
						className="rounded-xl border border-titanes-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-titanes-700 transition-colors hover:bg-titanes-100"
					>
						Ver todos los planteles
					</a>
				</div>
				<div className="grid gap-5 md:grid-cols-3">
					{TEAMS.map((team) => (
						<article key={team.title} className="rounded-2xl border border-titanes-100 bg-white p-6 shadow-sm">
							<h3 className="text-xl font-semibold text-titanes-900">{team.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-titanes-700">{team.description}</p>
							<a
								href="#"
								className="mt-6 inline-flex rounded-lg bg-titanes-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-titanes-700"
							>
								Ver calendario
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamsSection;
