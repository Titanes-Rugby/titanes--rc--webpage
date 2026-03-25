import type { SyntheticEvent } from 'react';
import type { NewsItem } from '../types';

const FALLBACK_IMAGE = '/images/background/1ra_fecha.png';

const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
	const img = event.currentTarget;

	if (img.dataset.fallbackApplied === 'true') return;

	img.dataset.fallbackApplied = 'true';
	img.src = FALLBACK_IMAGE;
};

type NewsPanelProps = {
	items: NewsItem[];
};

const NewsPanel = ({ items }: NewsPanelProps) => {
	return (
		<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			{items.map((item) => (
				<article key={item.id} className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
					<a href={item.link ?? item.imageLink ?? item.imageSrc} target="_blank" rel="noreferrer" className="block">
						<img
							src={item.imageSrc}
							alt={item.title}
							className="h-110 w-full object-cover object-center"
							onError={handleImageError}
						/>
					</a>
					<div className="space-y-2 p-5">
						<p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">{item.date}</p>
						<h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
						<p className="text-sm text-primary-700">{item.excerpt}</p>
					</div>
				</article>
			))}
		</div>
	);
};

export default NewsPanel;
