export enum Orientation {
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait',
}

export enum Device {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop',
}

export interface Breakpoint {
  orientation: Orientation;
  device: Device;
  width: number;
}

export const breakpoints: Breakpoint[] = [
  { orientation: Orientation.PORTRAIT, device: Device.MOBILE, width: 320 },
  { orientation: Orientation.LANDSCAPE, device: Device.MOBILE, width: 767 },
  { orientation: Orientation.PORTRAIT, device: Device.TABLET, width: 768 },
  { orientation: Orientation.LANDSCAPE, device: Device.TABLET, width: 1023 },
  { orientation: Orientation.LANDSCAPE, device: Device.LAPTOP, width: 1024 },
  { orientation: Orientation.LANDSCAPE, device: Device.DESKTOP, width: 1440 },
];
