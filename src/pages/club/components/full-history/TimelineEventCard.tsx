import { SparklesIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

import type { Ref } from 'react';

import type { TimelineEvent } from './types';

type TimelineEventCardProps = {
	event: TimelineEvent;
	index: number;
	isActive: boolean;
	refCallback: Ref<HTMLElement>;
};

const getImageStyle = (index: number) => {
	if (index === 0) return { objectPosition: 'center 63%' };
	if (index === 1) return { objectPosition: 'center 45%' };
	if (index === 2) return { objectPosition: 'center 27%' };
	return undefined;
};

const TimelineEventCard = ({ event, index, isActive, refCallback }: TimelineEventCardProps) => {
	const { year, title, subtitle, body, highlight, icon: Icon, image, gradient } = event;

	return (
		<motion.article
			data-timeline-card
			ref={refCallback}
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="relative rounded-3xl bg-white shadow-xl ring-1 ring-primary-900/5 overflow-hidden group"
		>
			<div className="overflow-hidden">
				<div className="relative h-100 overflow-hidden">
					<motion.img
						src={image}
						alt={title}
						className="h-full w-full object-cover"
						style={getImageStyle(index)}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.4 }}
					/>
					<div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent`} />
					<motion.div
						className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-6 py-2.5 text-lg font-extrabold text-white border border-white/20"
						whileHover={{ scale: 1.05 }}
					>
						{year}
					</motion.div>
					<motion.div
						className="absolute right-4 bottom-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-md text-white"
						animate={isActive ? { rotate: [0, 360] } : {}}
						transition={{ duration: 2, ease: 'linear' }}
						whileHover={{ scale: 1.1 }}
					>
						<Icon className="h-7 w-7" />
					</motion.div>
					{isActive ? (
						<motion.div
							layoutId="activeCard"
							className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400"
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.5 }}
						/>
					) : null}
				</div>
			</div>
			<div className="space-y-4 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white">
				<motion.h3 className="text-3xl font-bold leading-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
					{title}
				</motion.h3>
				<motion.p className="text-xl italic text-white/90" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
					{subtitle}
				</motion.p>
				<motion.p className="text-base leading-relaxed text-white/95" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
					{body}
				</motion.p>
				{highlight ? (
					<motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.02 }} className="rounded-2xl border-2 border-lime-300/30 bg-white/15 backdrop-blur-sm px-5 py-4 text-sm font-semibold text-white shadow-lg">
						<div className="flex items-start gap-2">
							<SparklesIcon className="h-5 w-5 text-lime-300 flex-shrink-0 mt-0.5" />
							<p>{highlight}</p>
						</div>
					</motion.div>
				) : null}
			</div>
		</motion.article>
	);
};

export default TimelineEventCard;
