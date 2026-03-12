import { useRef, useState } from 'react';

import { toPng } from 'html-to-image';

import { Button, PlayerCard } from '@components/ui';
import type { PlayerCardData } from '@components/ui/PlayerCard';

type PlayerCardPreviewCanvasProps = {
  player: PlayerCardData;
};

const PlayerCardPreviewCanvas = ({ player }: PlayerCardPreviewCanvasProps) => {
  const exportRef = useRef<HTMLDivElement>(null);
  const squareExportRef = useRef<HTMLDivElement>(null);
  const [exportMode, setExportMode] = useState<'normal' | 'square' | null>(null);
  const [exportError, setExportError] = useState('');

  const exportFromRef = async (node: HTMLDivElement, mode: 'normal' | 'square') => {
    if (exportMode) return;
    setExportError('');
    setExportMode(mode);

    try {
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#0a1f1b',
      });
      const link = document.createElement('a');
      link.download = `${player.id || 'player-card'}-${mode}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      setExportError('No fue posible exportar la imagen. Intenta nuevamente.');
    } finally {
      setExportMode(null);
    }
  };

  const handleExportNormal = () => {
    exportFromRef(exportRef.current as HTMLDivElement, 'normal');
  };

  const handleExportSquare = () => {
    exportFromRef(squareExportRef.current as HTMLDivElement, 'square');
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-[0.12em] text-titanes-600 uppercase">Preview</h2>
        <div className="flex items-center gap-2">
          <Button onClick={handleExportNormal} loading={exportMode === 'normal'}>
            Exportar PNG
          </Button>
          <Button variant="secondary" onClick={handleExportSquare} loading={exportMode === 'square'}>
            Exportar Cuadrado
          </Button>
        </div>
      </div>
      <div className="rounded-2xl border border-titanes-100 bg-titanes-900/40 p-3">
        <div ref={exportRef} className="mx-auto max-w-[1300px] [perspective:1800px]">
          <PlayerCard player={player} />
        </div>
      </div>
      <div className="sr-only">
        <div ref={squareExportRef} className="h-[1200px] w-[1200px] overflow-hidden bg-[#0a1f1b] p-24">
          <div className="w-[1660px] -translate-x-[270px] [perspective:1800px]">
            <PlayerCard player={player} />
          </div>
        </div>
      </div>
      {exportError ? <p className="text-xs font-semibold text-red-600">{exportError}</p> : null}
    </section>
  );
};

export default PlayerCardPreviewCanvas;
