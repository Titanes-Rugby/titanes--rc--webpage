import { WithBackground } from '@components/Parallax';

const TEAMS = [
	{
		title: 'Primera Division',
		href: '/equipos/primera-division',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.',
	},
	{
		title: 'Juveniles',
		href: '/equipos/juveniles',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
	},
	{
		title: 'Femenino',
		href: '/equipos/femenino',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.',
	},
];

const TeamsSection = () => {
	return (
		<WithBackground
			id="equipos"
			backgroundClassName="bg-titanes-50 dark:bg-titanes-950"
			className="py-20"
			overlayClassName="bg-transparent"
		>
			<div className="mx-auto w-full max-w-6xl px-6">
				<div className="mb-10 flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500 dark:text-titanes-400">
							Equipos
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-titanes-900 dark:text-titanes-100 sm:text-4xl">
							Categorias competitivas del club
						</h2>
					</div>
					<a
						href="/equipos"
						className="rounded-xl border border-titanes-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-titanes-700 transition-colors hover:bg-titanes-100 dark:border-titanes-700 dark:text-titanes-200 dark:hover:bg-titanes-800"
					>
						Ver todos los planteles
					</a>
				</div>
				<div className="grid gap-5 md:grid-cols-3">
					{TEAMS.map((team) => (
						<article
							key={team.title}
							className="rounded-2xl border border-titanes-100 bg-white p-6 shadow-sm dark:border-titanes-800 dark:bg-titanes-900"
						>
							<h3 className="text-xl font-semibold text-titanes-900 dark:text-titanes-100">{team.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-titanes-700 dark:text-titanes-300">{team.description}</p>
							<a
								href={team.href}
								className="mt-6 inline-flex rounded-lg bg-titanes-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-titanes-700 dark:bg-titanes-100 dark:text-titanes-900 dark:hover:bg-white"
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
