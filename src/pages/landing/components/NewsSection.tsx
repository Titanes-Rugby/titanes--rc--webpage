import { WithBackground } from '@components/Parallax';

import { newsItems } from '@/pages/media/media.data';

const NewsSection = () => {
	return (
		<WithBackground
			id="media"
			backgroundClassName="bg-primary-900"
			className="py-20"
			overlayClassName="bg-transparent"
		>
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">Noticias</p>
				<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Actualidad del club</h2>
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{newsItems.slice(0, 3).map((item) => (
						<article key={item.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
							{item.imageSrc ? (
								<div className="h-36 w-full overflow-hidden">
									<img
										src={item.imageSrc}
										alt={item.title}
										className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
									/>
								</div>
							) : null}
							<div className="p-6 space-y-3">
								<p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-200/80">{item.date}</p>
								<h3 className="text-lg font-semibold text-white">{item.title}</h3>
								<p className="text-sm leading-relaxed text-primary-100/90">{item.excerpt}</p>
								<a
									href={`/media/noticias#${item.id}`}
									className="inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-primary-200 transition hover:text-accent-200"
								>
									Leer nota
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</WithBackground>
	);
};

export default NewsSection;
