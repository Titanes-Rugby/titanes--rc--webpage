import { describe, expect, it } from 'vitest';

import {
  buildPlayerCardFromValues,
  playerCardBuilderDefaults,
  playerCardPresets,
} from '@/pages/tools/player-card/playerCardBuilder.config';
import { searchFromValues, valuesFromSearch } from '@/pages/tools/player-card/utils/shareParams';

describe('player-card config and share params', () => {
  it('builds share query from values and skips blob image src', () => {
    const query = searchFromValues({ ...playerCardBuilderDefaults, imageSrc: 'blob:preview' });
    expect(query).not.toContain('imageSrc=');

    const queryWithImage = searchFromValues(playerCardBuilderDefaults);
    expect(queryWithImage).toContain('imageSrc=');
  });

  it('parses values from query string', () => {
    const parsed = valuesFromSearch('?name=Chris&position=Wing&id=player-1');
    expect(parsed).toEqual(expect.objectContaining({ name: 'Chris', position: 'Wing', id: 'player-1' }));

    const parsedWithEmpty = valuesFromSearch('?name=&teamName=Titanes');
    expect(parsedWithEmpty).toEqual({ teamName: 'Titanes' });
  });

  it('creates player-card metrics and has presets', () => {
    const card = buildPlayerCardFromValues(playerCardBuilderDefaults);
    expect(card.metrics).toHaveLength(6);
    expect(card.metrics[0].label).toBe('Weight');
    expect(playerCardPresets.length).toBeGreaterThan(1);
  });
});
