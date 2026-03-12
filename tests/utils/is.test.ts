import { describe, expect, it } from 'vitest';

import {
  isArray,
  isCssVar,
  isDefined,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isFunction,
  isInputEvent,
  isNotNumber,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isRefObject,
  isString,
  isUndefined,
} from '@/utils/is';

describe('is utils', () => {
  it('checks numeric and primitive conditions', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNotNumber(NaN)).toBe(true);
    expect(isNumeric('12.5')).toBe(true);
    expect(isDefined(0)).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
    expect(isNull(null)).toBe(true);
    expect(isString('ok')).toBe(true);
    expect(isCssVar('var(--token)')).toBe(true);
  });

  it('checks arrays, objects and function types', () => {
    expect(isArray([1, 2])).toBe(true);
    expect(isEmptyArray([])).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isEmptyObject({})).toBe(true);
    expect(isObject([])).toBe(false);
  });

  it('checks empty, ref and input event shapes', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('value')).toBe(false);
    expect(isRefObject({ current: 1 })).toBe(true);
    expect(isInputEvent({ target: { value: 'x' } })).toBe(true);
    expect(isInputEvent(null)).toBeFalsy();
  });
});
