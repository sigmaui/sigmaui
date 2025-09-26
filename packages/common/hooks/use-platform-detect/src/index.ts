import { UAParser } from 'ua-parser-js';

export type DeviceType = 'mobile' | 'tablet' | 'smarttv' | 'console' | 'wearable' | 'desktop' | undefined;

export type PlatformInfo = {
  device: DeviceType;
  os?: string;
  model?: string;
  browser?: string;
  version: {
    os?: string;
    browser?: string;
  };
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isSmarttv: boolean;
  isWearable: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isIpad: boolean;
};

export type PlatformDetectResult = {
  platform: PlatformInfo;
};

export const DEVICE_TYPES: Record<string, DeviceType> = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  DESKTOP: undefined,
};

const getPlatformDetect = (userAgent: string): PlatformDetectResult => {
  const parser = new UAParser();
  parser.setUA(userAgent);

  const { os, browser, device } = parser.getResult();

  let browserName: string | undefined = browser.name;

  if (userAgent.includes('coc_coc_browser')) {
    browserName = 'Coc Coc';
  } else if (userAgent.includes('OPR/') || userAgent.includes('Opera')) {
    browserName = 'Opera';
  } else if (userAgent.includes('Edge') || userAgent.includes('Edg')) {
    browserName = 'Microsoft Edge';
  }

  return {
    platform: {
      device: (device.type as DeviceType) || 'desktop',
      os: os.name,
      model: device.model,
      browser: browserName,
      version: {
        os: os.version,
        browser: browser.major,
      },
      isDesktop: device.type === DEVICE_TYPES.DESKTOP,
      isMobile: device.type === DEVICE_TYPES.MOBILE,
      isTablet: device.type === DEVICE_TYPES.TABLET,
      isSmarttv: device.type === DEVICE_TYPES.SMART_TV,
      isWearable: device.type === DEVICE_TYPES.WEARABLE,
      isIOS: os.name === 'iOS',
      isAndroid: os.name === 'Android',
      isSafari: browser.name === 'Safari' || browser.name === 'Mobile Safari',
      isFirefox: browser.name === 'Firefox',
      isIpad: device.model === 'iPad',
    },
  };
};

export const usePlatformDetect = (userAgent?: string): PlatformDetectResult => {
  if (!userAgent) {
    userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
  }

  return getPlatformDetect(userAgent);
};

export default usePlatformDetect;
