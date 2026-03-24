import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

import type { GalleryItem } from './galleryItems';

type GalleryLightboxProps = {
	item: GalleryItem | null;
	onClose: () => void;
};

const GalleryLightbox = ({ item, onClose }: GalleryLightboxProps) => (
	createPortal(
		<AnimatePresence>
			{item ? (
				<>
					<motion.button
						type="button"
						onClick={onClose}
						className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						aria-label="Cerrar visor de imagen"
					/>
					<div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
						<motion.figure
							layoutId={item.layoutId ?? `gallery-item-${item.image}`}
							role="dialog"
							aria-modal="true"
							aria-label={item.title}
							className="pointer-events-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-primary-950 shadow-2xl"
						>
							<img src={item.image} alt={item.title} className="h-[55vh] w-full object-cover sm:h-[65vh]" />
							<figcaption className="flex items-end justify-between gap-4 bg-primary-950/95 px-5 py-4 text-left">
								<div className="space-y-1">
									<p className="text-sm font-semibold text-white sm:text-base">{item.title}</p>
									<p className="text-xs text-primary-300 sm:text-sm">{item.caption}</p>
								</div>
								<button
									type="button"
									onClick={onClose}
									className="shrink-0 rounded-full border border-primary-500 px-4 py-2 text-xs font-semibold text-primary-100 transition hover:border-white hover:bg-white/10"
								>
									Cerrar
								</button>
							</figcaption>
						</motion.figure>
					</div>
				</>
			) : null}
		</AnimatePresence>,
		document.body,
	)
);

export default GalleryLightbox;
