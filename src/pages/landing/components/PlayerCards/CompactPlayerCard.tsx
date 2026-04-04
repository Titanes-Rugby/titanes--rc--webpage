import { motion } from 'framer-motion';

import PlayerPortrait from '@components/ui/PlayerPortrait';
import { getAgeFromBirthDate } from '@utils/date';

import type { TeamPlayer } from '@/pages/teams/types';

type CompactPlayerCardProps = {
  player: TeamPlayer;
};

const getPlayerName = (player: TeamPlayer) => {
  const legacyName = (player as TeamPlayer & { name?: string }).name;
  return player.fullName || legacyName || `${player.firstName} ${player.lastName}`.trim();
};
const getPrimaryPosition = (player: TeamPlayer) => (Array.isArray(player.position) ? player.position[0] : player.position) ?? '--';

const CompactPlayerCard = ({ player }: CompactPlayerCardProps) => {
  const displayName = getPlayerName(player);
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm"
    >
      <PlayerPortrait
        imageSrc={player.imageSrc}
        alt={displayName}
        number={player.number}
        imageClassName="transition-transform duration-300 group-hover:scale-105"
      />
      <motion.div
        variants={{ rest: { opacity: 0.72 }, hover: { opacity: 0.95 } }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-primary-950/80 via-primary-950/25 to-transparent"
      />
      <motion.div
        variants={{ rest: { y: '72%' }, hover: { y: '0%' } }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-4"
      >
        <motion.div
          variants={{ rest: { scale: 0.98 }, hover: { scale: 1 } }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-white/20 bg-primary-950/85 p-3 backdrop-blur-sm"
        >
          <p className="text-sm font-semibold text-white">{displayName}</p>
          <p className="mt-0.5 text-[11px] font-semibold tracking-[0.08em] text-primary-200 uppercase">
            {getPrimaryPosition(player)}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-primary-100">
            <p>Edad: {getAgeFromBirthDate(player.birthDate)}</p>
            <p>Estatus: {(player.statuses ?? ['Jugador']).join(' / ')}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default CompactPlayerCard;
