import { describe, expect, it } from 'vitest';

import {
  capitalize,
  formatMessage,
  formatStatus,
  pluralize,
  slugify,
  toCamelCase,
} from '@/utils/string';

describe('string utils', () => {
  it('formats and transforms strings', () => {
    expect(slugify('Hola Mundo')).toBe('Hola-Mundo');
    expect(capitalize('titanes')).toBe('Titanes');
    expect(capitalize()).toBe('');
    expect(formatStatus('in_progress')).toBe('In Progress');
    expect(formatStatus()).toBe('');
    expect(toCamelCase('HELLO WORLD')).toBe('helloWorld');
  });

  it('formats template messages and plural forms', () => {
    expect(formatMessage('Hola <name>, tienes <count>.', { name: 'Leo', count: 3 })).toBe(
      'Hola Leo, tienes 3.',
    );
    expect(formatMessage('Valor: <value> / <missing>', { value: 'ok' })).toBe('Valor: ok / <missing>');
    expect(pluralize(1, 'jugador')).toBe('1 jugador');
    expect(pluralize(2, 'jugador')).toBe('2 jugadors');
    expect(pluralize(2, 'jugador', 'jugadores')).toBe('2 jugadores');
    expect(pluralize(null, 'partido')).toBe('0 partidos');
  });
});
