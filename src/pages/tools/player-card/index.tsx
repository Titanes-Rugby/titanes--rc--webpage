import PlayerCardBuilderForm from './components/PlayerCardBuilderForm';
import PlayerCardBuilderHero from './components/PlayerCardBuilderHero';
import PlayerCardBuilderToolbar from './components/PlayerCardBuilderToolbar';
import PlayerCardPreviewCanvas from './components/PlayerCardPreviewCanvas';
import { usePlayerCardBuilderForm } from './hooks/usePlayerCardBuilderForm';

const PlayerCardToolPage = () => {
  const {
    player,
    presets,
    uploadError,
    shareStatus,
    onImageFileChange,
    onSelectPreset,
    copyShareLink,
    ...form
  } = usePlayerCardBuilderForm();

  return (
    <main className="bg-primary-50 min-h-screen">
      <PlayerCardBuilderHero />
      <section className="mx-auto grid w-full max-w-[1360px] gap-6 px-6 py-8 xl:grid-cols-[360px_1fr]">
        <div className="space-y-4">
          <PlayerCardBuilderToolbar presets={presets} shareStatus={shareStatus} onSelectPreset={onSelectPreset} onCopyShareLink={copyShareLink} />
          <article className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-primary-600 uppercase">Datos del jugador</h2>
            <p className="mt-1 text-sm text-primary-700">Completa todos los campos para generar la tarjeta.</p>
            <div className="mt-4">
              <PlayerCardBuilderForm form={form} uploadError={uploadError} onImageFileChange={onImageFileChange} />
            </div>
          </article>
        </div>

        <PlayerCardPreviewCanvas player={player} />
      </section>
    </main>
  );
};

export default PlayerCardToolPage;
