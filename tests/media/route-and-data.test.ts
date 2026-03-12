import { describe, expect, it } from 'vitest';

import { Component, ErrorBoundary } from '@/pages/media/route';
import MediaPage from '@/pages/media';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';
import { getMediaSection, isMediaSection } from '@/pages/media/media.data';

describe('media route and data', () => {
  it('exports media route component and shared error boundary', () => {
    expect(Component).toBe(MediaPage);
    expect(ErrorBoundary).toBe(RouteErrorBoundary);
  });

  it('validates section ids and resolves section metadata', () => {
    expect(isMediaSection('noticias')).toBe(true);
    expect(isMediaSection('galeria')).toBe(true);
    expect(isMediaSection('videos')).toBe(true);
    expect(isMediaSection('other')).toBe(false);

    expect(getMediaSection('galeria').title).toBe('Galeria Oficial');
    expect(getMediaSection('videos').description).toMatch(/contenido audiovisual/i);
    expect(getMediaSection('unknown' as any).id).toBe('noticias');
  });
});
