import { HeartIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

import { LegacyTeam } from '../LegacyTeam';

import type { LegacyListItem } from './types';

type LegacySectionProps = {
	teams: LegacyListItem[];
};

const LegacySection = ({ teams }: LegacySectionProps) => (
	<motion.article
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className="rounded-3xl border-2 border-primary-200 bg-gradient-to-br from-white via-lime-50/30 to-green-50/30 p-8 shadow-lg"
	>
		<div className="flex items-center gap-3 mb-4">
			<div className="p-3 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl">
				<HeartIcon className="h-6 w-6 text-white" />
			</div>
			<h3 className="text-2xl font-bold text-primary-900">Legado que se multiplica</h3>
		</div>
		<p className="mt-3 text-base leading-relaxed text-primary-700 mb-6">
			Titanides impulsó nuevas ramas del rugby nacional. Estas son las huellas directas de nuestra hermandad:
		</p>
		<div className="grid md:grid-cols-2 gap-4">
			{teams.map((team, index) => (
				<LegacyTeam key={team.name} team={team} index={index} />
			))}
		</div>
	</motion.article>
);

export default LegacySection;
