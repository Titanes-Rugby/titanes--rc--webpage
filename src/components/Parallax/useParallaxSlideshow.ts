import { useCallback, useEffect, useMemo, useState } from 'react';

interface UseParallaxSlideshowOptions {
	intervalMs: number;
	totalSlides: number;
}

const getPrefersReducedMotion = () => {
	if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
		return false;
	}
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const useParallaxSlideshow = ({ intervalMs, totalSlides }: UseParallaxSlideshowOptions) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

	useEffect(() => {
		if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
			return undefined;
		}

		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updatePreference = () => setPrefersReducedMotion(query.matches);
		updatePreference();
		query.addEventListener('change', updatePreference);
		return () => query.removeEventListener('change', updatePreference);
	}, []);

	useEffect(() => {
		if (totalSlides <= 1 || isPaused || prefersReducedMotion) {
			return undefined;
		}

		const interval = window.setInterval(() => {
			if (document.hidden) {
				return;
			}
			setActiveIndex((previous) => (previous + 1) % totalSlides);
		}, intervalMs);

		return () => window.clearInterval(interval);
	}, [intervalMs, isPaused, prefersReducedMotion, totalSlides]);

	useEffect(() => {
		setActiveIndex((previous) => (previous >= totalSlides ? 0 : previous));
	}, [totalSlides]);

	const controls = useMemo(
		() => ({
			pause: () => setIsPaused(true),
			resume: () => setIsPaused(false),
		}),
		[],
	);

	const next = useCallback(() => {
		setActiveIndex((previous) => (previous + 1) % Math.max(totalSlides, 1));
	}, [totalSlides]);

	return {
		activeIndex,
		isPaused,
		next,
		prefersReducedMotion,
		setActiveIndex,
		...controls,
	};
};
