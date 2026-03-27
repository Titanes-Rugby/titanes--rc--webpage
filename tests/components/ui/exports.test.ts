import { describe, expect, it } from 'vitest';

describe('ui barrel exports', () => {
  it('exports shared ui modules and showcase re-export', async () => {
    const ui = await import('@/components/ui');
    const showcase = await import('@/components/ui/Showcase');

    expect(ui.Button).toBeDefined();
    expect(ui.Blockquote).toBeDefined();
    expect(ui.Loader).toBeDefined();
    expect(ui.UiPreview).toBeDefined();
    expect(ui.MasonryLayout).toBeDefined();
    expect(ui.MasonryGallery).toBeDefined();
    expect(showcase.UiPreview).toBe(ui.UiPreview);
  });
});
