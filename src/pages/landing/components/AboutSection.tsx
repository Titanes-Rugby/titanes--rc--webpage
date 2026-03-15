import { Blockquote, Logo } from '@components/ui';
const PILLARS = [
	{
		title: 'Hermandad',
		description:
			'En Titanes, no solo compartimos un campo de juego; construimos una verdadera familia. Es el vínculo inquebrantable que nos une y donde el apoyo mutuo trasciende el deporte con cada miembro.',
	},
	{
		title: 'Honor',
		description:
			'El honor es nuestra brújula moral dentro y fuera del campo. Jugamos con integridad y respeto hacia árbitros y rivales. Para un Titán, ganar es importante, pero nuestra dignidad y honestidad es lo que realmente nos define como rugbiers.',
	},
	{
		title: 'Disciplina',
		description:
			'La disciplina es el motor de nuestra excelencia. Es el rigor que nos permite formar atletas íntegros con cada titán enseñándonos que la constancia y el esfuerzo son las rutas hacia el éxito.',
	},
];

const AboutSection = () => {
	return (
		<section id="club" className="bg-white py-20">
			<div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Quienes Somos</p>
					<h2 className="mt-3 text-3xl font-semibold text-primary-900 sm:text-4xl">
						Un club construido desde la identidad y la entrega.
					</h2>
					<p className="mt-5 text-base leading-relaxed text-primary-700">
						Titanes Rugby Club es una organización deportiva de alto impacto con sede en la Universidad Tecnológica de
						Panamá (UTP). Fundado por entusiastas del deporte, hoy nos consolidamos como un pilar del rugby panameño,
						ofreciendo un espacio de formación integral para hombres, mujeres y categorías infantiles.
					</p>
					<div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-primary-100 bg-primary-50 px-4 py-3">
						<Logo size="sm" />
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">
								Fundado por la comunidad
							</p>
							<p className="text-sm text-primary-700">Titanes Rugby Club</p>
						</div>
					</div>
					<Blockquote className="mt-6" variant="accent" size="md" cite="Grito de guerra">
						Y Hermandad, Honor y Disciplina... Quienes somos TITANES, quienes somos Titanes... Auuuuu... Auuuuu...
						Auuuuu.
					</Blockquote>
				</div>
				<div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
					{PILLARS.map((pillar) => (
						<article key={pillar.title} className="rounded-2xl border border-primary-100 bg-primary-50/70 p-5">
							<h3 className="text-lg font-semibold text-primary-900">{pillar.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-primary-700">{pillar.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
