import { useState } from 'react';
import { motion } from 'framer-motion';

import { getAgeFromBirthDate } from '@utils/date';
import { cn } from '@/utils/cn';

import AnimatedTiltCard from '@components/ui/AnimatedTiltCard';
import PlayerPortrait from '@components/ui/PlayerPortrait';

import type { TeamPlayer } from '../../types';

type PlayerGridCardProps = {
  player: TeamPlayer;
  onSelectPlayer: (player: TeamPlayer) => void;
};

const PlayerGridCard = ({ player, onSelectPlayer }: PlayerGridCardProps) => {
  const [isPanamaTheme, setIsPanamaTheme] = useState(false);

  return (
    <AnimatedTiltCard
      scrollTilt
      className={cn(
        'overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-lg',
        isPanamaTheme
          ? 'border-[#0057b8]/30 bg-gradient-to-br from-white via-[#f7fbff] to-[#fff1f1] shadow-[0_18px_45px_rgba(0,87,184,0.18)]'
          : 'border-primary-100 bg-white',
      )}
    >
      {({ contentX, contentY, contentScale }) => (
        <div className="relative h-full">
          <button
            type="button"
            onClick={() => onSelectPlayer(player)}
            aria-label={player.name}
            className="group block w-full text-left"
          >
            <motion.div className="relative" style={{ x: contentX, y: contentY, scale: contentScale }}>
              {isPanamaTheme ? (
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-1.5 overflow-hidden">
                  <span className="flex-1 bg-[#d21034]" />
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-[#0057b8]" />
                </div>
              ) : null}
              <PlayerPortrait
                imageSrc={player.imageSrc}
                alt={player.name}
                number={player.number}
                showFlag={Boolean(player.nationalCaps)}
                className={cn(isPanamaTheme && 'bg-gradient-to-br from-[#0057b8] via-white to-[#d21034]')}
                imageClassName="transition-transform duration-300 group-hover:scale-105"
                numberClassName={cn(isPanamaTheme && 'bg-white text-[#0057b8] ring-2 ring-[#0057b8]/35')}
              />
            </motion.div>
          </button>

          <div className={cn('space-y-1 p-4', isPanamaTheme && 'bg-white/80')}>
            <button
              type="button"
              onClick={() => onSelectPlayer(player)}
              aria-label="Abrir detalle del jugador"
              className="block w-full text-left"
            >
              <h3 className={cn('text-lg font-semibold', isPanamaTheme ? 'text-[#0057b8]' : 'text-primary-900')}>
                {player.name}
              </h3>
            </button>

            {player.nationalCaps ? (
              <button
                type="button"
                onClick={() => setIsPanamaTheme((current) => !current)}
                aria-pressed={isPanamaTheme}
                className={cn(
                  'inline-flex cursor-pointer items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2',
                  isPanamaTheme
                    ? 'bg-[#0057b8] text-white ring-2 ring-[#d21034]/25 hover:bg-[#004897] focus-visible:outline-[#0057b8]'
                    : 'bg-primary-900 text-white hover:bg-primary-700 focus-visible:outline-primary-700',
                )}
              >
                Seleccion nacional · {player.nationalCaps} CAP
              </button>
            ) : null}

            <button
              type="button"
              onClick={() => onSelectPlayer(player)}
              aria-label="Abrir detalle del jugador"
              className="block w-full space-y-1 text-left"
            >
              <p className={cn('text-sm', isPanamaTheme ? 'text-[#0057b8]' : 'text-primary-600')}>
                Edad: {getAgeFromBirthDate(player.birthDate)}
              </p>
              <p className={cn('text-xs font-semibold', isPanamaTheme ? 'text-[#0057b8]' : 'text-primary-500')}>
                Posicion · {player.position}
              </p>
              <p className={cn('text-xs font-semibold', isPanamaTheme ? 'text-[#0057b8]' : 'text-primary-500')}>
                Estado: {(player.statuses ?? ['Player']).join(' / ')}
              </p>
            </button>
          </div>
        </div>
      )}
    </AnimatedTiltCard>
  );
};

export default PlayerGridCard;
