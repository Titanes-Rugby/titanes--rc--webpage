import type { RefObject } from 'react';

import type { TimelineEvent } from './types';

type TimelineSidebarProps = {
	events: TimelineEvent[];
	activeIndex: number;
	cardRefs: RefObject<HTMLElement[]>;
	onSelect: (index: number) => void;
};

const TimelineSidebar = ({ events, activeIndex, cardRefs, onSelect }: TimelineSidebarProps) => (
	<div className="hidden lg:block">
		<div className="sticky top-24 space-y-6 rounded-3xl bg-gradient-to-br from-primary-900/30 via-primary-800/20 to-primary-900/30 backdrop-blur-sm p-8 border border-primary-700/30">
			<h3 className="text-2xl font-bold text-primary-900 mb-4">Linea de tiempo</h3>
			<div className="space-y-3">
				{events.map((event, idx) => (
					<button
						type="button"
						key={event.year}
						onClick={() => {
							onSelect(idx);
							cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
						}}
						className={`w-full text-left p-3 rounded-xl transition ${
							activeIndex === idx
								? 'bg-gradient-to-r from-lime-400/20 to-green-400/20 border-l-4 border-lime-500'
								: 'bg-primary-50/50 border-l-4 border-transparent hover:border-primary-300 cursor-pointer'
						}`}
					>
						<p className="text-sm font-bold text-primary-900">{event.year}</p>
						<p className="text-xs text-primary-700">{event.title}</p>
					</button>
				))}
			</div>
		</div>
	</div>
);

export default TimelineSidebar;
