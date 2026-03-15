import { Link } from 'react-router-dom';

import { facilityItems } from '../club.data';

const FacilitiesSection = () => {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-primary-900">Instalaciones</h2>
        <p className="mt-2 text-sm leading-relaxed text-primary-700">Infraestructura enfocada en desarrollo deportivo, salud del atleta y preparacion competitiva de alto nivel.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {facilityItems.map((item) => (
          <article key={item.id} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-700">{item.detail}</p>
          </article>
        ))}
      </div>
      <article className="rounded-2xl bg-primary-800 p-6 text-white">
        <p className="text-xs font-semibold tracking-[0.12em] text-primary-100 uppercase">Visita Guiada</p>
        <h3 className="mt-2 text-2xl font-bold">Conoce las instalaciones del club</h3>
        <p className="mt-2 text-sm text-primary-100/90">Coordina una visita para academias, jugadores prospecto y patrocinadores.</p>
        <Link to="/contacto" className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold tracking-[0.12em] text-primary-900 uppercase">Solicitar visita</Link>
      </article>
    </section>
  );
};

export default FacilitiesSection;
