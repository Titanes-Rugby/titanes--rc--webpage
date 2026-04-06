import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

import { cn } from '@/utils/cn';

interface MarqueeProps<T> {
	items: T[];
	renderItem: (item: T, index: number) => ReactNode;
	speed?: number;
	containerClassName?: string;
	contentClassName?: string;
	showEdgeFade?: boolean;
	edgeFadeColorFrom?: string;
}

const Marquee = <T,>({
	items,
	renderItem,
	speed = 0.07,
	containerClassName,
	contentClassName,
	showEdgeFade = true,
	edgeFadeColorFrom = 'from-white',
}: MarqueeProps<T>) => {
	const [isPaused, setIsPaused] = useState(false);
	const [loopWidth, setLoopWidth] = useState(0);
	const directionRef = useRef(-1);
	const offsetRef = useRef(0);
	const rowRef = useRef<HTMLDivElement | null>(null);
	const x = useMotionValue(0);

	useEffect(() => {
		const measure = () => setLoopWidth(rowRef.current?.getBoundingClientRect().width ?? 0);
		measure();
		const observer = new ResizeObserver(measure);
		/* v8 ignore next */
		if (rowRef.current) observer.observe(rowRef.current);
		window.addEventListener('resize', measure);
		return () => {
			observer.disconnect();
			window.removeEventListener('resize', measure);
		};
	}, []);

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const nextY = window.scrollY;
			if (nextY > lastY + 2) directionRef.current = -1;
			if (nextY < lastY - 2) directionRef.current = 1;
			lastY = nextY;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useAnimationFrame((_time, delta) => {
		if (isPaused || !loopWidth) return;
		offsetRef.current += -directionRef.current * delta * speed;
		const wrapped = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
		x.set(-wrapped);
	});

	return (
		<div
			className={cn('relative overflow-hidden rounded-2xl bg-white p-3', containerClassName)}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onFocusCapture={() => setIsPaused(true)}
			onBlurCapture={() => setIsPaused(false)}
		>
			{showEdgeFade ? (
				<>
					<div
						className={cn(
							'pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40 bg-gradient-to-r from-white to-transparent',
							edgeFadeColorFrom,
						)}
					/>
					<div
						className={cn(
							'pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40 bg-gradient-to-l from-white to-transparent',
							edgeFadeColorFrom,
						)}
					/>
				</>
			) : null}
			<motion.div className={cn('flex w-max', contentClassName)} style={{ x }}>
				<div ref={rowRef} className="flex gap-3 pr-3">
					{items.map((item, index) => (
						<div key={`first-${index}`}>{renderItem(item, index)}</div>
					))}
				</div>
				<div className="flex gap-3 pr-3" aria-hidden>
					{items.map((item, index) => (
						<div key={`second-${index}`}>{renderItem(item, index)}</div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Marquee;
