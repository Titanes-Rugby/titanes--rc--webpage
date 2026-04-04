import { useEffect, useMemo, useState } from 'react';

import { Marquee } from '@components/ui';

import { basePlayers } from '@/pages/teams/players.data';

import CompactPlayerCard from './CompactPlayerCard';

const shufflePlayers = <T,>(items: T[]) => {
	const pool = [...items];
	for (let index = pool.length - 1; index > 0; index -= 1) {
		const swapIndex = Math.floor(Math.random() * (index + 1));
		[pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
	}
  return pool;
};

const PLAYER_BATCH_SIZE = 6;
const REFRESH_MS = 14000;

const pickPlayersBatch = (items: typeof basePlayers) => {
  return shufflePlayers(items).slice(0, Math.min(PLAYER_BATCH_SIZE, items.length));
};

const sameBatch = (left: typeof basePlayers, right: typeof basePlayers) => {
  if (left.length !== right.length) return false;
  return left.every((player, index) => player.id === right[index]?.id);
};

const rotateBatch = (items: typeof basePlayers) => {
  if (items.length <= 1) return items;
  return [...items.slice(1), items[0]];
};

export const PlayersMarqueeSection = () => {
  const [playersBatch, setPlayersBatch] = useState(() => pickPlayersBatch(basePlayers));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPlayersBatch((previous) => {
        let candidate = pickPlayersBatch(basePlayers);
        let guard = 0;
        while (sameBatch(previous, candidate) && guard < 5) {
          candidate = pickPlayersBatch(basePlayers);
          guard += 1;
        }
        return sameBatch(previous, candidate) ? rotateBatch(previous) : candidate;
      });
    }, REFRESH_MS);

    return () => window.clearInterval(interval);
  }, []);

  const marqueePlayers = useMemo(() => [...playersBatch, ...playersBatch], [playersBatch]);

	return (
		<section className="bg-gradient-to-b from-white to-primary-50/25 py-14" aria-labelledby="players-marquee-title">
			<div className="container mx-auto space-y-6 px-6 md:px-10">
				<div className="max-w-3xl space-y-2">
          <p className="text-primary-700 text-xs font-semibold tracking-[0.2em] uppercase">Plantel Titanes</p>
					<h2 id="players-marquee-title" className="text-2xl font-black text-primary-900 md:text-3xl">
						Jugadores en movimiento
					</h2>
				</div>
				<Marquee
					items={marqueePlayers}
					speed={0.09}
					containerClassName="rounded-none bg-transparent p-5 shadow-none "
					contentClassName="gap-5"
					showEdgeFade
					renderItem={(player, index) => (
						<div className="w-[min(86vw,360px)] [perspective:1400px]" aria-label={`player-marquee-item-${index}`}>
							<CompactPlayerCard player={player} />
						</div>
					)}
				/>
			</div>
		</section>
	);
};
