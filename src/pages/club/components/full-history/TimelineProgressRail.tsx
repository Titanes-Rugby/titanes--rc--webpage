import { motion, useTransform, type MotionValue } from 'framer-motion';

type TimelineProgressRailProps = {
	scrollYProgress: MotionValue<number>;
	timelineHeight: MotionValue<string>;
};

const TimelineProgressRail = ({ scrollYProgress, timelineHeight }: TimelineProgressRailProps) => (
	<div className="absolute left-0 top-0 bottom-0 hidden lg:block" style={{ left: 'calc(540px + 32px)' }}>
		<div className="sticky top-20 h-screen flex items-center">
			<div className="relative w-1 h-[60vh] bg-primary-200/30 rounded-full overflow-hidden">
				<motion.div
					className="absolute top-0 left-0 right-0 bg-gradient-to-b from-lime-400 via-green-500 to-emerald-600 rounded-full"
					style={{ height: timelineHeight }}
				/>
				<motion.div
					className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50"
					style={{ top: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
					animate={{
						scale: [1, 1.5, 1],
						boxShadow: [
							'0 0 10px rgba(163, 230, 53, 0.5)',
							'0 0 30px rgba(163, 230, 53, 0.8)',
							'0 0 10px rgba(163, 230, 53, 0.5)',
						],
					}}
					transition={{ duration: 2, repeat: Infinity }}
				/>
			</div>
		</div>
	</div>
);

export default TimelineProgressRail;
