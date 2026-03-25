import { useEffect, useRef, useState } from 'react';

const VISION_IMAGES = [
	'/images/background/batch_J1P1_-5.jpg', //Equipo Chicas
	'/images/background/fecha1-208.JPG', //Equipo chicos
];

const FADE_DURATION = 450;
const INTERVAL_MS = 4200;

const VisionPanel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fading, setFading] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		const startFade = () => {
			setFading(true);
			timeoutRef.current = setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % VISION_IMAGES.length);
				setFading(false);
			}, FADE_DURATION);
		};

		intervalRef.current = setInterval(startFade, INTERVAL_MS);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	const nextIndex = (currentIndex + 1) % VISION_IMAGES.length;

	return (
		<div className="relative h-115 overflow-hidden rounded-xl md:h-[28rem]">
			<img
				key={`current-${currentIndex}`}
				src={VISION_IMAGES[currentIndex]}
				alt="Foto equipo"
				className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}
				style={{ objectPosition: 'center 58%', transitionDuration: `${FADE_DURATION}ms` }}
			/>
			<img
				key={`next-${nextIndex}`}
				src={VISION_IMAGES[nextIndex]}
				alt="Foto equipo siguiente"
				className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${fading ? 'opacity-100' : 'opacity-0'}`}
				style={{ objectPosition: 'center 58%', transitionDuration: `${FADE_DURATION}ms` }}
			/>
		</div>
	);
};

export default VisionPanel;
