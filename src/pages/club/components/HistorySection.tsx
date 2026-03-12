import { Blockquote, Logo } from '@components/ui';

const HistorySection = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-titanes-900">Un club construido desde identidad y entrega</h2>
        <p className="text-sm leading-relaxed text-titanes-700">Titanes nace desde la comunidad para competir con disciplina, sentido de pertenencia y trabajo colectivo. La historia del club se ha consolidado con procesos deportivos estables y una cultura de mejora continua.</p>
        <p className="text-sm leading-relaxed text-titanes-700">Cada temporada fortalece la estructura de cantera y alto rendimiento, manteniendo el foco en valores: hermandad, honor y disciplina.</p>
        <div className="inline-flex items-center gap-3 rounded-xl border border-titanes-100 bg-titanes-50 px-4 py-3">
          <Logo size="sm" />
          <p className="text-sm text-titanes-700">Fundado por la comunidad de Titanes Rugby Club</p>
        </div>
      </div>

      <div className="space-y-3">
        {['Hermandad', 'Honor', 'Disciplina'].map((pillar) => (
          <article key={pillar} className="rounded-2xl border border-titanes-100 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-titanes-900">{pillar}</h3>
            <p className="mt-2 text-sm leading-relaxed text-titanes-700">Base cultural del club aplicada en entrenamiento, competencia y convivencia institucional.</p>
          </article>
        ))}
        <Blockquote variant="accent" size="md" cite="Grito de guerra">
          Y Hermandad, Honor y Disciplina... Quienes somos TITANES...
        </Blockquote>
      </div>
    </section>
  );
};

export default HistorySection;
