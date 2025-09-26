import React, { FC, ReactNode, createContext, useContext } from 'react';
import { PlatformDetectResult, PlatformInfo, usePlatformDetect } from '@sigmaui-kit/use-platform-detect';

export type { PlatformInfo, PlatformDetectResult };

interface PlatformContextType {
  platform: PlatformInfo;
}

const Context = createContext<PlatformContextType>({
  platform: {
    device: undefined,
    version: {},
    isDesktop: false,
    isMobile: false,
    isTablet: false,
    isSmarttv: false,
    isWearable: false,
    isIOS: false,
    isAndroid: false,
    isSafari: false,
    isFirefox: false,
    isIpad: false,
  },
});

interface PlatformProviderProps {
  userAgent?: string;
  children?: ReactNode;
}

export const PlatformProvider: FC<PlatformProviderProps> = ({ userAgent, children }) => {
  const { platform } = usePlatformDetect(userAgent);

  return <Context.Provider value={{ platform }}>{children}</Context.Provider>;
};

export const usePlatform = (): PlatformContextType => {
  return useContext(Context);
};

export const withPlatform = <T extends object>(Component: React.ComponentType<T & PlatformContextType>) => {
  return (props: Omit<T, keyof PlatformContextType>) => {
    const state = useContext(Context);
    return (
      <Component
        {...(props as T)}
        {...state}
      />
    );
  };
};
