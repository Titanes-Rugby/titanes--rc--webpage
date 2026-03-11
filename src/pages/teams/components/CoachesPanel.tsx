import type { TeamCoach } from '../types';

type CoachesPanelProps = {
  coaches: TeamCoach[];
};

const CoachesPanel = ({ coaches }: CoachesPanelProps) => {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {coaches.map((coach) => (
        <article key={coach.id} className="rounded-2xl border border-titanes-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.12em] text-titanes-500 uppercase">{coach.role}</p>
          <h3 className="mt-2 text-xl font-bold text-titanes-900">{coach.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-titanes-700">{coach.bio}</p>
        </article>
      ))}
    </section>
  );
};

export default CoachesPanel;
