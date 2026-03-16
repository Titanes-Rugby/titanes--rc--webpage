import { motion } from 'framer-motion';

import AnimatedTiltCard from '@components/ui/AnimatedTiltCard';
import PlayerPortrait from '@components/ui/PlayerPortrait';

import type { TeamCoach } from '../types';

type CoachesPanelProps = {
  coaches: TeamCoach[];
};

const CoachesPanel = ({ coaches }: CoachesPanelProps) => {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {coaches.map((coach) => (
        <AnimatedTiltCard
          key={coach.id}
          scrollTilt
          className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
        >
          {({ contentX, contentY, contentScale }) => (
            <div className="group">
              <motion.div className="relative" style={{ x: contentX, y: contentY, scale: contentScale }}>
                <PlayerPortrait
                  imageSrc={coach.imageSrc ?? '/images/players/player_1.png'}
                  alt={coach.name}
                  className="rounded-b-none"
                  imageClassName="object-top"
                />
              </motion.div>
              <div className="space-y-2 p-4">
                <p className="text-sm font-bold tracking-[0.14em] text-primary-600 uppercase">{coach.role}</p>
                <h3 className="text-lg font-semibold text-primary-900">{coach.name}</h3>
                <p className="text-sm leading-relaxed text-primary-700">{coach.bio}</p>
              </div>
            </div>
          )}
        </AnimatedTiltCard>
      ))}
    </section>
  );
};

export default CoachesPanel;
