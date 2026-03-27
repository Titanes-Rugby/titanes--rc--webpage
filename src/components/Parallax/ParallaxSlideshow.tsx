import { ComponentPropsWithoutRef, ReactNode, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/utils/cn';

import { toBackgroundUrl } from './backgroundUrl';
import { useParallaxSlideshow } from './useParallaxSlideshow';

export interface ParallaxSlide {
	id: string;
	image: string;
	overlayClassName?: string;
	position?: string;
}

interface ParallaxSlideshowProps extends ComponentPropsWithoutRef<'section'> {
	children: ReactNode;
	contentClassName?: string;
	intervalMs?: number;
	overlayClassName?: string;
	pauseOnHover?: boolean;
	slides: ParallaxSlide[];
	transitionMs?: number;
}

const DEFAULT_INTERVAL = 6500;
const DEFAULT_TRANSITION = 900;

const ParallaxSlideshow = ({
	children,
	className,
	contentClassName,
	intervalMs = DEFAULT_INTERVAL,
	overlayClassName = 'bg-primary-900/75',
	pauseOnHover = true,
	slides,
	transitionMs = DEFAULT_TRANSITION,
	...props
}: ParallaxSlideshowProps) => {
	const { activeIndex, pause, prefersReducedMotion, resume } = useParallaxSlideshow({
		intervalMs,
		totalSlides: slides.length,
	});

	const activeSlide = useMemo(() => slides[activeIndex] ?? slides[0], [activeIndex, slides]);
	const transitionDuration = transitionMs / 1000;

	if (!activeSlide) {
		return (
			<section className={cn('relative isolate w-full overflow-hidden', className)} {...props}>
				<div className={cn('relative z-10 w-full', contentClassName)}>{children}</div>
			</section>
		);
	}

	return (
		<section className={cn('relative isolate w-full overflow-hidden', className)} {...props}>
			<div
				className="relative flex min-h-screen items-center justify-center"
				onMouseEnter={pauseOnHover ? pause : undefined}
				onMouseLeave={pauseOnHover ? resume : undefined}
			>
				<AnimatePresence initial={false} mode="wait">
					<motion.div
						key={activeSlide.id}
						className="absolute inset-0 bg-cover bg-center md:bg-fixed"
						style={{
							backgroundImage: toBackgroundUrl(activeSlide.image),
							backgroundPosition: activeSlide.position ?? 'center',
						}}
						initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.01 }}
						transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
						aria-hidden
					/>
				</AnimatePresence>
				<div className={cn('absolute inset-0', activeSlide.overlayClassName ?? overlayClassName)} aria-hidden />
				<div className={cn('relative z-10 w-full', contentClassName)}>{children}</div>
			</div>
		</section>
	);
};

export default ParallaxSlideshow;
