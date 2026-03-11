import { Button } from '@components/ui';

import type { PlayerCardPreset } from '../types';

type PlayerCardBuilderToolbarProps = {
  presets: PlayerCardPreset[];
  shareStatus: 'idle' | 'copied' | 'error';
  onSelectPreset: (presetId: string) => void;
  onCopyShareLink: () => void;
};

const PlayerCardBuilderToolbar = ({
  presets,
  shareStatus,
  onSelectPreset,
  onCopyShareLink,
}: PlayerCardBuilderToolbarProps) => {
  return (
    <section className="space-y-3 rounded-2xl border border-titanes-100 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {presets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelectPreset(preset.id)}
            className="rounded-full border border-titanes-200 px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-titanes-700 uppercase transition hover:bg-titanes-50"
          >
            {preset.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="secondary" appearance="outline" size="sm" onClick={onCopyShareLink}>
          Copiar link
        </Button>
        {shareStatus === 'copied' ? <p className="text-xs font-semibold text-titanes-700">Link copiado</p> : null}
        {shareStatus === 'error' ? <p className="text-xs font-semibold text-red-600">No se pudo copiar</p> : null}
      </div>
    </section>
  );
};

export default PlayerCardBuilderToolbar;
