import { Blockquote, Logo } from '@components/ui';
import { EyeIcon, HandRaisedIcon, ShieldCheckIcon, TrophyIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const PILLARS = [
	{
		title: 'Hermandad',
		description: 'Somos una comunidad que se apoya dentro y fuera de la cancha; el vínculo inquebrantable que nos une.',
		Icon: HandRaisedIcon,
	},
	{
		title: 'Honor',
		description: 'Jugamos con integridad y respeto hacia árbitros y rivales. La dignidad está por encima del marcador.',
		Icon: ShieldCheckIcon,
	},
	{
		title: 'Disciplina',
		description: 'El rigor diario forma atletas íntegros; la constancia y el esfuerzo son nuestra ruta al éxito.',
		Icon: TrophyIcon,
	},
];

const HistorySection = () => {
	return (
		<section className="space-y-8">
			<div className="grid items-start gap-6 lg:grid-cols-[1.15fr,1fr]">
				<header className="space-y-2">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">Titanes Rugby Club</p>
					<h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
						Nuestra <span className="text-primary-600">Esencia</span> y Visión
					</h2>
					<p className="max-w-3xl text-sm leading-relaxed text-primary-700">
						Más que un equipo, somos una hermandad formada por estudiantes y profesionales que comparten la pasión por el rugby y el crecimiento personal.
					</p>
				</header>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
					{PILLARS.map(({ title, description, Icon }) => (
						<article
							key={title}
							className="flex h-full flex-col items-center rounded-2xl border border-primary-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
								<Icon className="h-6 w-6 text-primary-600" />
							</div>
							<h3 className="mt-2 text-base font-semibold text-primary-900">{title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-primary-700">{description}</p>
						</article>
					))}
				</div>
			</div>

			<div className="grid items-start gap-4 lg:grid-cols-2">
				<div className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
					<h3 className="text-xl font-semibold text-primary-900">¿Quiénes somos?</h3>
					<p className="mt-2 text-sm leading-relaxed text-primary-700">
						Titanes Rugby Club no es solo un equipo; nació del sueño de ocho entusiastas y hoy se alza como uno de los pilares del rugby en el istmo. Nuestra sede principal es la UTP, donde estudiantes y profesionales desafían sus límites.
					</p>
					<p className="mt-3 text-sm leading-relaxed text-primary-700">
						Somos una brotherhood que trasciende ideologías y trasfondos. Formamos personas íntegras que llevan disciplina y respeto a cada aspecto de su vida.
					</p>
				</div>

				<article className="rounded-2xl border border-primary-600 bg-gradient-to-r from-primary-700 to-primary-500 p-5 text-white shadow-md">
					<h3 className="text-lg font-semibold">Nuestra Misión</h3>
					<p className="mt-2 text-sm leading-relaxed">
						Cultivar el crecimiento del rugby en Panamá a través de una estructura inclusiva y competitiva, formando personas integrales que entiendan que la verdadera fuerza reside en la solidaridad y el apoyo mutuo.
					</p>
					<p className="mt-2 text-sm leading-relaxed">
						El éxito se mide por la calidad de nuestros vínculos y la pasión que entregamos en cada training session.
					</p>
				</article>
			</div>

			<article className="grid gap-4 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm lg:grid-cols-[1.1fr,0.9fr]">
				<div>
					<h3 className="flex items-center gap-2 text-lg font-semibold text-primary-900">
						<EyeIcon className="h-5 w-5 text-primary-600" /> Nuestra Visión
					</h3>
					<p className="mt-2 text-sm leading-relaxed text-primary-700">
						Ser el principal referente del rugby nacional, consolidando la integración con la comunidad universitaria y expandiendo el impacto de todas nuestras ramas.
					</p>
					<div className="mt-3 flex flex-wrap gap-2">
						<span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
							<ShieldCheckIcon className="h-4 w-4 text-primary-600" /> Titanes
						</span>
						<span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
							<HandRaisedIcon className="h-4 w-4 text-primary-600" /> Titánides
						</span>
						<span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
							<ShieldCheckIcon className="h-4 w-4 text-primary-600" /> Titanes Juveniles
						</span>
						<span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
							<TrophyIcon className="h-4 w-4 text-primary-600" /> Competencia en la UPR
						</span>
					</div>
				</div>
				<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-200 to-primary-400">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
					<div className="relative flex h-full min-h-[140px] items-center justify-center text-sm font-semibold text-primary-800">
						Foto equipo
					</div>
				</div>
			</article>

			<Link
				to="/club/historia"
				className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-4 text-white shadow-md transition hover:-translate-y-0.5"
			>
				<div>
					<p className="text-xs uppercase tracking-[0.2em] text-white/80">Historia</p>
					<p className="text-lg font-semibold">Conoce nuestra historia</p>
				</div>
				<span className="text-sm font-semibold">Ver más →</span>
			</Link>

			<Blockquote variant="accent" size="md" cite="Grito de guerra">
				Y Hermandad, Honor y Disciplina... Quienes somos TITANES... Auuuuu...
			</Blockquote>
		</section>
	);
};

export default HistorySection;
