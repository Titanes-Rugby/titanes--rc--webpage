import { describe, expect, it, vi } from 'vitest';

import {
  clampValue,
  countDecimalPlaces,
  percentToValue,
  roundValueToStep,
  toPrecision,
  valueToPercent,
} from '@/utils/number';

describe('number utils', () => {
  it('converts numeric values and decimals', () => {
    expect(toPrecision(1.23456, 2)).toBe('1.23');
    expect(toPrecision(1.2)).toBe('1.2');
    expect(countDecimalPlaces(1.23)).toBe(2);
    expect(countDecimalPlaces(Number.POSITIVE_INFINITY)).toBe(0);
  });

  it('handles percentages and step rounding', () => {
    expect(valueToPercent(75, 50, 100)).toBe(50);
    expect(percentToValue(0.5, 10, 20)).toBe(15);
    expect(roundValueToStep(5.26, 0, 0.5)).toBe('5.5');
  });

  it('clamps values and warns on invalid bounds', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    expect(clampValue(12, 0, 10)).toBe(10);
    expect(clampValue(-1, 0, 10)).toBe(0);
    expect(clampValue(null as unknown as number, 0, 10)).toBeNull();
    expect(clampValue(5, 10, 1)).toBe(1);
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });
});
