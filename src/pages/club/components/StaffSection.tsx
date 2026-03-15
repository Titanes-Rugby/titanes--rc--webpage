import { staffMembers } from '../club.data';

const StaffSection = () => {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-primary-900">Staff Tecnico</h2>
        <p className="mt-2 text-sm leading-relaxed text-primary-700">Equipo profesional responsable de direccion tactica, rendimiento fisico y operacion diaria del plantel competitivo.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {staffMembers.map((member) => (
          <article key={member.id} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">{member.role}</p>
            <h3 className="mt-2 text-xl font-bold text-primary-900">{member.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-700">{member.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
