import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const SPONSORS = ['Sponsor A', 'Sponsor B', 'Sponsor C', 'Sponsor D', 'Sponsor E', 'Sponsor F'];

const SponsorPill = ({
	name,
	onPause,
	onResume,
}: {
	name: string;
	onPause: () => void;
	onResume: () => void;
}) => (
	<div
		className="flex h-16 min-w-[11rem] items-center justify-center rounded-xl border border-titanes-100 bg-titanes-50 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-titanes-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-titanes-700 hover:shadow-md"
		onMouseEnter={onPause}
		onMouseLeave={onResume}
		onFocus={onPause}
		onBlur={onResume}
	>
		{name}
	</div>
);

const SponsorsSection = () => {
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
		const speed = 0.07;
		offsetRef.current += -directionRef.current * delta * speed;
		const wrapped = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
		x.set(-wrapped);
	});

	return (
		<section id="patrocinadores" className="bg-white py-14">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="mb-6 text-left text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">
					Patrocinadores
				</p>
				<div className="relative overflow-hidden rounded-2xl bg-white p-3">
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
					<motion.div className="flex w-max" style={{ x }}>
						<div ref={rowRef} className="flex gap-3 pr-3">
							{SPONSORS.map((sponsor) => (
								<SponsorPill
									key={`first-${sponsor}`}
									name={sponsor}
									onPause={() => setIsPaused(true)}
									onResume={() => setIsPaused(false)}
								/>
							))}
						</div>
						<div className="flex gap-3 pr-3" aria-hidden>
							{SPONSORS.map((sponsor) => (
								<SponsorPill
									key={`second-${sponsor}`}
									name={sponsor}
									onPause={() => setIsPaused(true)}
									onResume={() => setIsPaused(false)}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SponsorsSection;
