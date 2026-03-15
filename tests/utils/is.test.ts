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
    expect(isNumber('1')).toBe(false);
    expect(isNotNumber(NaN)).toBe(true);
    expect(isNotNumber(3)).toBe(false);
    expect(isNumeric('12.5')).toBe(true);
    expect(isNumeric('not-a-number')).toBe(false);
    expect(isDefined(0)).toBe(true);
    expect(isDefined(undefined)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(0)).toBe(false);
    expect(isNull(null)).toBe(true);
    expect(isNull('value')).toBe(false);
    expect(isString('ok')).toBe(true);
    expect(isString(123)).toBe(false);
    expect(isCssVar('var(--token)')).toBe(true);
    expect(isCssVar('--token')).toBe(false);
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
    expect(isInputEvent({ target: 'x' })).toBe(false);
    expect(isInputEvent(null)).toBeFalsy();
  });
});
