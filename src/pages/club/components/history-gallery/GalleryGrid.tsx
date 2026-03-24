import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import GalleryLightbox from './GalleryLightbox';
import { BASE_ITEMS, EXTRA_ITEMS, type GalleryItem } from './galleryItems';

const GalleryGrid = () => {
	const [expanded, setExpanded] = useState(false);
	const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
	const items = useMemo(() => (expanded ? [...BASE_ITEMS, ...EXTRA_ITEMS] : BASE_ITEMS), [expanded]);

	return (
		<>
			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((item, idx) => (
					<motion.figure
						key={`${item.title}-${item.image}`}
						layoutId={`gallery-item-${item.image}`}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: Math.min(idx * 0.05, 0.4) }}
						className="flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-primary-50/60 shadow-sm"
					>
						<button
							type="button"
							onClick={() => setSelectedItem(item)}
							aria-label={`Abrir imagen: ${item.title}`}
							className="group text-left"
						>
							<div className="relative h-44 w-full overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
								/>
							</div>
							<figcaption className="p-4 space-y-1">
								<p className="text-sm font-semibold text-primary-900">{item.title}</p>
								<p className="text-xs text-primary-700 leading-relaxed">{item.caption}</p>
							</figcaption>
						</button>
					</motion.figure>
				))}
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={() => setExpanded((prev) => !prev)}
					className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-300 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800 transition hover:border-primary-500 hover:bg-white"
				>
					{expanded ? 'Ver menos' : 'Ver mas'}
				</button>
			</div>
			<GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
		</>
	);
};

export default GalleryGrid;
