import { motion } from 'framer-motion';

import AnimatedTiltCard from '@components/ui/AnimatedTiltCard';

import type { TeamCoach } from '../types';
import { getAgeFromBirthDate } from './players/getAge';

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
            <div className="group p-4">
              <motion.div className="flex flex-col gap-3" style={{ x: contentX, y: contentY, scale: contentScale }}>
                <div className="flex items-start gap-4">
                  <div className="h-36 w-30 overflow-hidden rounded-xl border border-primary-100 bg-primary-50 shadow-sm">
                    <img
                      src={coach.imageSrc ?? '/images/players/player_1.png'}
                      alt={coach.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold tracking-[0.1em] text-primary-600 uppercase">{coach.role}</p>
                    <h3 className="text-xl font-black text-primary-900">{coach.name}</h3>
                    <p className="text-xs font-semibold text-primary-600">Edad: {getAgeFromBirthDate(coach.birthDate)}</p>
                    <p className="text-xs font-semibold text-primary-600">
                      Experiencia en rugby: {coach.experienceYears ?? '--'} años
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-primary-700">
                  {coach.bio.length > 150 ? `${coach.bio.slice(0, 147)}...` : coach.bio}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatedTiltCard>
      ))}
    </section>
  );
};

export default CoachesPanel;
