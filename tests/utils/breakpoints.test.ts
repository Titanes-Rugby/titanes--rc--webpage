import { describe, expect, it } from 'vitest';

import { Device, Orientation, breakpoints } from '@/utils/breakpoints';

describe('breakpoints', () => {
  it('exports orientation and device enums', () => {
    expect(Orientation.LANDSCAPE).toBe('landscape');
    expect(Orientation.PORTRAIT).toBe('portrait');
    expect(Device.MOBILE).toBe('mobile');
    expect(Device.DESKTOP).toBe('desktop');
  });

  it('contains ordered responsive widths with expected terminal values', () => {
    expect(breakpoints[0]).toEqual({ orientation: Orientation.PORTRAIT, device: Device.MOBILE, width: 320 });
    expect(breakpoints.at(-1)).toEqual({ orientation: Orientation.LANDSCAPE, device: Device.DESKTOP, width: 1440 });
    expect(breakpoints.every((item, index, arr) => index === 0 || item.width >= arr[index - 1].width)).toBe(true);
  });
});
