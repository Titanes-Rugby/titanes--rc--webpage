import { useEffect, useRef, useState } from 'react';

const VISION_IMAGES = [
	'/images/background/batch_J1P1_-5.jpg',
	'/images/background/batch_ligadeRugby9demayo-212.JPG',
	'/images/background/segundafecha-327.JPG',
];

const FADE_DURATION = 450;
const INTERVAL_MS = 4200;

const VisionPanel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [nextIndex, setNextIndex] = useState(1);
	const [fading, setFading] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		const startFade = () => {
			const upcoming = (currentIndex + 1) % VISION_IMAGES.length;
			setNextIndex(upcoming);
			setFading(true);
			timeoutRef.current = setTimeout(() => {
				setCurrentIndex(upcoming);
				setFading(false);
			}, FADE_DURATION);
		};

		intervalRef.current = setInterval(startFade, INTERVAL_MS);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [currentIndex]);

	return (
		<div className="relative h-115 overflow-hidden rounded-xl md:h-[28rem]">
			<img
				key={`current-${currentIndex}`}
				src={VISION_IMAGES[currentIndex]}
				alt="Foto equipo"
				className={`absolute inset-0 h-full w-full object-cover transition-opacity ${fading ? 'opacity-0' : 'opacity-100'}`}
				style={{ objectPosition: 'center 50%', transitionDuration: `${FADE_DURATION}ms` }}
			/>
			<img
				key={`next-${nextIndex}`}
				src={VISION_IMAGES[nextIndex]}
				alt="Foto equipo siguiente"
				className={`absolute inset-0 h-full w-full object-cover transition-opacity ${fading ? 'opacity-100' : 'opacity-0'}`}
				style={{ objectPosition: 'center 50%', transitionDuration: `${FADE_DURATION}ms` }}
			/>
		</div>
	);
};

export default VisionPanel;
