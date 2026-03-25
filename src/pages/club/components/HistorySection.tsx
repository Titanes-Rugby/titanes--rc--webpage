import { Blockquote, Logo } from '@components/ui';
import { EyeIcon, ShieldCheckIcon, TrophyIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import VisionPanel from './VisionPanel';

const PILLARS = [
	{
		title: 'Hermandad',
		image: '/images/background/fecha1-207.JPG',
		description: 'Somos una comunidad que se apoya dentro y fuera de la cancha; el vínculo inquebrantable que nos une.',
	},
	{
		title: 'Honor',
		image: '/images/background/J2_RUGBY-433.jpg',
		description: 'Jugamos con integridad y respeto hacia árbitros y rivales. La dignidad está por encima del marcador.',
	},
	{
		title: 'Disciplina',
		image: '/images/background/segundafecha-369.JPG',
		description: 'El rigor diario forma atletas íntegros; la constancia y el esfuerzo son nuestra ruta al éxito.',
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
						Más que un equipo, somos una hermandad formada por estudiantes y profesionales que comparten la pasión por
						el rugby y el crecimiento personal.
					</p>
				</header>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
					{PILLARS.map(({ title, description, image }) => (
						<article
							key={title}
							className="overflow-hidden rounded-2xl border border-primary-100 bg-white text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<div className="h-40 w-full overflow-hidden">
								<img
									src={image}
									alt={title}
									className="h-full w-full object-cover"
									style={{
										objectPosition:
											title === 'Hermandad' ? 'center 5%' : title === 'Disciplina' ? 'center 20%' : undefined,
									}}
								/>
							</div>
							<div className="p-4">
								<h3 className="text-base font-semibold text-primary-900">{title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-primary-700">{description}</p>
							</div>
						</article>
					))}
				</div>
			</div>

			<div className="grid items-start gap-4 lg:grid-cols-2">
				<div className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
					<h3 className="text-xl font-semibold text-primary-900">¿Quiénes somos?</h3>
					<p className="mt-2 text-sm leading-relaxed text-primary-700">
						Titanes Rugby Club no es solo un equipo; nació del sueño de ocho entusiastas y hoy se alza como uno de los
						pilares del rugby en el istmo. Nuestra sede principal es la UTP, donde estudiantes y profesionales desafían
						sus límites.
					</p>
					<p className="mt-3 text-sm leading-relaxed text-primary-700">
						Somos una brotherhood que trasciende ideologías y trasfondos. Formamos personas íntegras que llevan
						disciplina y respeto a cada aspecto de su vida.
					</p>
				</div>

				<article className="rounded-2xl border border-primary-600 bg-gradient-to-r from-primary-700 to-primary-500 p-5 text-white shadow-md">
					<h3 className="text-lg font-semibold">Nuestra Misión</h3>
					<p className="mt-2 text-sm leading-relaxed">
						Cultivar el crecimiento del rugby en Panamá a través de una estructura inclusiva y competitiva, formando
						personas integrales que entiendan que la verdadera fuerza reside en la solidaridad y el apoyo mutuo.
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
						Ser el principal referente del rugby nacional, consolidando la integración con la comunidad universitaria y
						expandiendo el impacto de todas nuestras ramas.
					</p>
				<div className="mt-3 flex flex-wrap gap-2">
						<a
							href="/equipos/primera-division"
							className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 transition hover:border-primary-400 hover:bg-white"
						>
							<ShieldCheckIcon className="h-4 w-4 text-primary-600" /> Titanes
						</a>
						<a
							href="/equipos/femenino"
							className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 transition hover:border-primary-400 hover:bg-white"
						>
							<ShieldCheckIcon className="h-4 w-4 text-primary-600" /> Titánides
						</a>
						<a
							href="/equipos/juveniles"
							className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 transition hover:border-primary-400 hover:bg-white"
						>
							<ShieldCheckIcon className="h-4 w-4 text-primary-600" /> Titanes Juveniles
						</a>
						<a
							href="/fixture"
							className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 transition hover:border-primary-400 hover:bg-white"
						>
							<TrophyIcon className="h-4 w-4 text-primary-600" /> Competencia en la UPR
						</a>
					</div>
				</div>
				<VisionPanel />
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
