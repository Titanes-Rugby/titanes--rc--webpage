import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CountUpStatProps {
	end: number;
	label: string;
	suffix?: string;
	durationMs?: number;
	className?: string;
}

const CountUpStat = ({
	end,
	label,
	suffix = '',
	durationMs = 1400,
	className = 'rounded-xl border border-white/15 bg-white/10 px-4 py-3',
}: CountUpStatProps) => {
	const [value, setValue] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(containerRef, { once: true, margin: '-20% 0px' });
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (!isInView) {
			return;
		}

		if (shouldReduceMotion) {
			setValue(end);
			return;
		}

		let frameId = 0;
		const start = performance.now();

		const tick = (now: number) => {
			const progress = Math.min((now - start) / durationMs, 1);
			const eased = 1 - (1 - progress) * (1 - progress);
			setValue(Math.round(end * eased));

			if (progress < 1) {
				frameId = window.requestAnimationFrame(tick);
			}
		};

		frameId = window.requestAnimationFrame(tick);

		return () => window.cancelAnimationFrame(frameId);
	}, [durationMs, end, isInView, shouldReduceMotion]);

	return (
		<div ref={containerRef} className={className}>
			<p className="text-xl font-semibold text-white">
				{value}
				{suffix}
			</p>
			<p className="text-titanes-100/85">{label}</p>
		</div>
	);
};

export default CountUpStat;
