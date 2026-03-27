import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

import type { GalleryItem } from './galleryItems';

type GalleryLightboxProps = {
	item: GalleryItem | null;
	onClose: () => void;
};

const springTransition = {
	type: 'spring' as const,
	stiffness: 240,
	damping: 28,
	mass: 0.85,
};

const GalleryLightbox = ({ item, onClose }: GalleryLightboxProps) => {
	useEscapeKey(onClose, !!item);
	useLockBodyScroll(!!item);

	return createPortal(
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
						transition={{ duration: 0.28, ease: 'easeOut' }}
						aria-label="Cerrar visor de imagen"
					/>
					<motion.div
						className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4"
						initial={{ opacity: 0, scale: 0.985 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.992 }}
						transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
					>
						<motion.figure
							layoutId={item.layoutId ?? `gallery-item-${item.image}`}
							role="dialog"
							aria-modal="true"
							aria-label={item.title}
							className="pointer-events-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-primary-950 shadow-2xl"
							transition={springTransition}
						>
							<motion.img
								src={item.image}
								alt={item.title}
								className="h-[55vh] w-full object-cover sm:h-[65vh]"
								initial={{ scale: 1.04 }}
								animate={{ scale: 1 }}
								exit={{ scale: 1.02 }}
								transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
							/>
							<motion.figcaption
								className="flex items-end justify-between gap-4 bg-primary-950/95 px-5 py-4 text-left"
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 8 }}
								transition={{ duration: 0.26, delay: 0.05, ease: 'easeOut' }}
							>
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
							</motion.figcaption>
						</motion.figure>
					</motion.div>
				</>
			) : null}
		</AnimatePresence>,
		document.body,
	);
};

export default GalleryLightbox;
