import { WithBackground } from '@components/Parallax';

const NEWS = [
	{
		title: 'Titanes inicia la pretemporada',
		href: '/media/noticias',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.',
	},
	{
		title: 'Convocatoria categorias juveniles',
		href: '/media/noticias',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
	},
	{
		title: 'Resumen de la ultima jornada',
		href: '/media/noticias',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.',
	},
];

const NewsSection = () => {
	return (
		<WithBackground
			id="media"
			backgroundClassName="bg-titanes-900"
			className="py-20"
			overlayClassName="bg-transparent"
		>
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-200">Noticias</p>
				<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Actualidad del club</h2>
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{NEWS.map((item) => (
						<article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
							<h3 className="text-lg font-semibold text-white">{item.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-titanes-100/90">{item.description}</p>
							<a
								href={item.href}
								className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-titanes-200"
							>
								Leer nota
							</a>
						</article>
					))}
				</div>
			</div>
		</WithBackground>
	);
};

export default NewsSection;
