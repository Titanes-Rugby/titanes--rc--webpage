import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import type { TeamTab } from '../types';

const tabs: { id: TeamTab; label: string }[] = [
	{ id: 'players', label: 'Players' },
	{ id: 'coaches', label: 'Coaching Staff' },
	{ id: 'stats', label: 'Stats' },
	{ id: 'fixtures', label: 'Fixtures' },
];

type TeamsTabsProps = {
	activeTab: TeamTab;
	basePath: string;
};

const TeamsTabs = ({ activeTab, basePath }: TeamsTabsProps) => {
	return (
		<div className="sticky top-0 z-20 border-b border-primary-100 bg-white/95 backdrop-blur-sm">
			<div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 py-3">
				{tabs.map((tab) => (
					<Link
						key={tab.id}
						to={`${basePath}/${tab.id}`}
						className="relative rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.12em] text-primary-700 uppercase"
					>
						{activeTab === tab.id ? (
							<motion.span
								layoutId="teams-tab"
								className="absolute inset-0 rounded-lg bg-primary-700"
								transition={{ type: 'spring', stiffness: 260, damping: 24 }}
							/>
						) : null}
						<span className="relative z-10 text-inherit" style={{ color: activeTab === tab.id ? '#fff' : undefined }}>
							{tab.label}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TeamsTabs;
