import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

import type { LegacyTeam as TLegacyTeam } from '../types';

interface Props {
	index: number;
	team: TLegacyTeam;
}

export const LegacyTeam = ({ index, team }: Props) => {
	return (
		<motion.div
			key={team.name}
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1 }}
			whileHover={{ scale: 1.02, y: -2 }}
			className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-600 p-5 text-white shadow-md border border-primary-500 cursor-pointer"
		>
			<div className="flex items-center gap-3">
				<ShieldCheckIcon className="h-8 w-8 text-lime-300" />
				<div className="flex-1">
					<p className="font-bold text-xl">{team.name}</p>
					<p className="text-base text-white/80">Fundador: {team.founder}</p>
				</div>

				<div className="ml-auto size-20">
					<img src={team.logo} alt={team.name} className="h-full w-full object-contain" />
				</div>
			</div>
		</motion.div>
	);
};
