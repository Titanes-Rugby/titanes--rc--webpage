import { AnimatePresence, motion } from 'framer-motion';

import { getAgeFromBirthDate } from '@utils/date';

import PlayerPortrait from '@components/ui/PlayerPortrait';

import type { TeamPlayer } from '../../types';

type PlayerQuickViewProps = {
	player: TeamPlayer | null;
	onClose: () => void;
};

const getPositions = (player: TeamPlayer) => (Array.isArray(player.position) ? player.position : [player.position]);
const getPlayerName = (player: TeamPlayer) => {
	const legacyName = (player as TeamPlayer & { name?: string }).name;
	return player.fullName || legacyName || `${player.firstName} ${player.lastName}`.trim();
};

const PlayerQuickView = ({ player, onClose }: PlayerQuickViewProps) => {
	return (
		<AnimatePresence>
			{player ? (
				<>
					<motion.button
						type="button"
						onClick={onClose}
						className="fixed inset-0 z-40 bg-black/45"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>
					<motion.aside
						className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl"
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 260, damping: 28 }}
					>
						<PlayerPortrait
							imageSrc={player.imageSrc}
							alt={getPlayerName(player)}
							className="w-full rounded-2xl"
							imageClassName="rounded-2xl"
						/>
						<div className="mt-6 space-y-3">
							<h3 className="text-3xl font-black text-primary-900">{getPlayerName(player)}</h3>
							{player.nationalCaps ? (
								<p className="inline-flex items-center rounded-full bg-primary-900 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
									Seleccion nacional · {player.nationalCaps} CAP
								</p>
							) : null}
							{player.bio ? <p className="text-sm leading-relaxed text-primary-700">{player.bio}</p> : null}
							<div className="grid grid-cols-1 gap-3">
								<InfoPill label="Posición" value={getPositions(player).join(' / ')} />
								<InfoPill label="Edad" value={getAgeFromBirthDate(player.birthDate)} />
								<InfoPill label="Altura" value={player.height ?? '--'} />
								<InfoPill label="Peso" value={player.weight ?? '--'} />
								<InfoPill label="Años de experiencia" value={player.experienceYears ?? '--'} />
								<InfoPill label="Mano fuerte" value={player.strongHand ?? '--'} />
								<InfoPill
									label="Estatus"
									value={(player.statuses && player.statuses.length ? player.statuses : ['Jugador']).join(' / ')}
								/>
							</div>
						</div>
						<button
							type="button"
							onClick={onClose}
							className="mt-8 inline-flex w-full justify-center rounded-xl bg-primary-700 px-4 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase"
						>
							Close
						</button>
					</motion.aside>
				</>
			) : null}
		</AnimatePresence>
	);
};

type InfoPillProps = {
	label: string;
	value: string;
};

const InfoPill = ({ label, value }: InfoPillProps) => (
	<div className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 shadow-sm">
		<p className="text-[11px] font-semibold tracking-[0.12em] text-primary-500 uppercase">{label}</p>
		<p className="mt-1 text-sm font-bold text-primary-900">{value}</p>
	</div>
);

export default PlayerQuickView;
