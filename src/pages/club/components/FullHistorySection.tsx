import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ClubLogoTimeline from './ClubLogoTimeline';
import HistoryGallery from './HistoryGallery';
import HomeCtaPanel from './full-history/HomeCtaPanel';
import HistoryHero from './full-history/HistoryHero';
import LegacySection from './full-history/LegacySection';
import TimelineEventCard from './full-history/TimelineEventCard';
import TimelineProgressRail from './full-history/TimelineProgressRail';
import TimelineSidebar from './full-history/TimelineSidebar';
import { EVENTS, LEGACY } from './full-history/data';

const FullHistorySection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<HTMLElement[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
	const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const cards = containerRef.current.querySelectorAll('[data-timeline-card]');
			const windowHeight = window.innerHeight;

			cards.forEach((card, index) => {
				const rect = (card as HTMLElement).getBoundingClientRect();
				const cardCenter = rect.top + rect.height / 2;
				if (cardCenter < windowHeight / 2 && cardCenter > 0) setActiveIndex(index);
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className="space-y-12" ref={containerRef}>
			<HistoryHero />

			<div className="relative">
				<TimelineProgressRail scrollYProgress={scrollYProgress} timelineHeight={timelineHeight} />
				<div className="grid gap-10 lg:grid-cols-[minmax(320px,540px),1fr] lg:gap-16">
					<div className="space-y-12">
						{EVENTS.map((event, index) => (
							<TimelineEventCard
								key={event.title}
								event={event}
								index={index}
								isActive={activeIndex === index}
								refCallback={(el) => {
									if (el) cardRefs.current[index] = el;
								}}
							/>
						))}
					</div>

					<TimelineSidebar events={EVENTS} activeIndex={activeIndex} cardRefs={cardRefs} onSelect={setActiveIndex} />
				</div>
			</div>

			<LegacySection teams={LEGACY} />
			<HistoryGallery />
			<ClubLogoTimeline />
			<HomeCtaPanel />
		</section>
	);
};

export default FullHistorySection;
