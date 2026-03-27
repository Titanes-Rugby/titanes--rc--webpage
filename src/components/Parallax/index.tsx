import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { toBackgroundUrl } from './backgroundUrl';
export type { ParallaxSlide } from './ParallaxSlideshow';
export { default as ParallaxSlideshow } from './ParallaxSlideshow';
export { useParallaxSlideshow } from './useParallaxSlideshow';

interface ParallaxProps extends ComponentPropsWithoutRef<'section'> {
	backgroundImage: string;
	children: ReactNode;
	contentClassName?: string;
	overlayClassName?: string;
}

interface WithBackgroundProps extends ComponentPropsWithoutRef<'section'> {
	children: ReactNode;
	backgroundImage?: string;
	backgroundClassName?: string;
	contentClassName?: string;
	overlayClassName?: string;
}

const Parallax = ({
	children,
	backgroundImage,
	className,
	contentClassName,
	overlayClassName = 'bg-primary-900/75',
	...props
}: ParallaxProps) => {
	return (
		<section className={cn('relative isolate w-full overflow-hidden', className)} {...props}>
			<div className="relative flex min-h-screen items-center justify-center">
				<div
					className="absolute inset-0 bg-cover bg-center md:bg-fixed"
					style={{ backgroundImage: toBackgroundUrl(backgroundImage) }}
					aria-hidden
				/>
				<div className={cn('absolute inset-0', overlayClassName)} aria-hidden />
				<div className={cn('relative z-10 w-full', contentClassName)}>{children}</div>
			</div>
		</section>
	);
};

export const WithBackground = ({
	children,
	backgroundImage,
	backgroundClassName = 'bg-white',
	className,
	contentClassName,
	overlayClassName = 'bg-white/92',
	...props
}: WithBackgroundProps) => {
	return (
		<section className={cn('relative isolate w-full overflow-hidden', className)} {...props}>
			{backgroundImage ? (
				<div
					className="absolute inset-0 bg-cover bg-center md:bg-fixed"
					style={{ backgroundImage: toBackgroundUrl(backgroundImage) }}
					aria-hidden
				/>
			) : (
				<div className={cn('absolute inset-0', backgroundClassName)} aria-hidden />
			)}
			<div className={cn('absolute inset-0', overlayClassName)} aria-hidden />
			<div className={cn('relative z-10', contentClassName)}>{children}</div>
		</section>
	);
};
export default Parallax;
