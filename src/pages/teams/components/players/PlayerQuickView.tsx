import { AnimatePresence, motion } from 'framer-motion';

import PlayerPortrait from '@components/ui/PlayerPortrait';

import type { TeamPlayer } from '../../types';

type PlayerQuickViewProps = {
  player: TeamPlayer | null;
  onClose: () => void;
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
            <PlayerPortrait imageSrc={player.imageSrc} alt={player.name} className="w-full rounded-2xl" />
            <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">#{player.number} · {player.position}</p>
            <h3 className="mt-2 text-3xl font-black text-primary-900">{player.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-700">{player.bio ?? 'Jugador clave del plantel con enfoque tactico y disciplina competitiva.'}</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Stat label="Age" value={player.age ?? '--'} />
              <Stat label="Height" value={player.height ?? '--'} />
              <Stat label="Weight" value={player.weight ?? '--'} />
            </div>
            <button type="button" onClick={onClose} className="mt-6 rounded-xl bg-primary-700 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-white uppercase">Close</button>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
};

type StatProps = {
  label: string;
  value: string;
};

const Stat = ({ label, value }: StatProps) => (
  <article className="rounded-xl border border-primary-100 bg-primary-50 px-3 py-2">
    <p className="text-[10px] font-semibold tracking-[0.12em] text-primary-500 uppercase">{label}</p>
    <p className="mt-1 text-sm font-bold text-primary-900">{value}</p>
  </article>
);

export default PlayerQuickView;
