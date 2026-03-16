import { motion } from 'framer-motion';

import { getAgeFromBirthDate } from '@utils/date';

import AnimatedTiltCard from '@components/ui/AnimatedTiltCard';
import PlayerPortrait from '@components/ui/PlayerPortrait';

import type { TeamPlayer } from '../../types';

type PlayersGridProps = {
	players: TeamPlayer[];
	page: number;
	pages: number;
	filteredCount: number;
	onSelectPlayer: (player: TeamPlayer) => void;
	onPageChange: (page: number) => void;
};

const PlayersGrid = ({ players, page, pages, filteredCount, onSelectPlayer, onPageChange }: PlayersGridProps) => {
	return (
		<div className="space-y-5">
			<p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">
				{filteredCount} players found
			</p>
			{players.length ? (
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{players.map((player) => (
						<AnimatedTiltCard
							key={player.id}
							scrollTilt
							className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
						>
							{({ contentX, contentY, contentScale }) => (
								<button type="button" onClick={() => onSelectPlayer(player)} className="group w-full text-left">
									<motion.div className="relative" style={{ x: contentX, y: contentY, scale: contentScale }}>
										<PlayerPortrait
											imageSrc={player.imageSrc}
											alt={player.name}
											number={player.number}
											imageClassName="transition-transform duration-300 group-hover:scale-105"
										/>
									</motion.div>
									<div className="space-y-1 p-4">
										<h3 className="text-lg font-semibold text-primary-900">{player.name}</h3>
										<p className="text-sm text-primary-600">Edad: {getAgeFromBirthDate(player.birthDate)}</p>
										<p className="text-xs font-semibold text-primary-500">Posición: {player.position}</p>
										<p className="text-xs font-semibold text-primary-500">
											Estatus: {(player.statuses ?? ['Jugador']).join(' / ')}
										</p>
									</div>
								</button>
							)}
						</AnimatedTiltCard>
					))}
				</div>
			) : (
				<article className="rounded-2xl border border-primary-100 bg-white p-6 text-center text-sm text-primary-600">
					No players found with the current filters.
				</article>
			)}
			<div className="flex items-center justify-center gap-2">
				<PagerButton disabled={page === 1} onClick={() => onPageChange(page - 1)}>
					Prev
				</PagerButton>
				<span className="px-2 text-xs font-semibold tracking-[0.12em] text-primary-600 uppercase">
					Page {page} / {pages}
				</span>
				<PagerButton disabled={page === pages} onClick={() => onPageChange(page + 1)}>
					Next
				</PagerButton>
			</div>
		</div>
	);
};

type PagerButtonProps = {
	children: string;
	disabled: boolean;
	onClick: () => void;
};

const PagerButton = ({ children, disabled, onClick }: PagerButtonProps) => (
	<button
		type="button"
		disabled={disabled}
		onClick={onClick}
		className="rounded-lg border border-primary-200 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-primary-700 uppercase disabled:cursor-not-allowed disabled:opacity-45"
	>
		{children}
	</button>
);

export default PlayersGrid;
