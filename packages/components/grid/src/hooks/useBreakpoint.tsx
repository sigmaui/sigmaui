import { useRef } from 'react';
import useLayoutEffect from '@rc-component/util/lib/hooks/useLayoutEffect';
import useForceUpdate from '@sigma-ui-kit/util/hooks/useForceUpdate';
import type { ScreenMap } from '@sigma-ui-kit/util/responsiveObserver';
import useResponsiveObserver from '@sigma-ui-kit/util/responsiveObserver';

function useBreakpoint(refreshOnChange: boolean, defaultScreens: null): ScreenMap | null;
// eslint-disable-next-line no-redeclare
function useBreakpoint(refreshOnChange?: boolean, defaultScreens?: ScreenMap): ScreenMap;

// eslint-disable-next-line no-redeclare
function useBreakpoint(
  refreshOnChange = true,
  defaultScreens: ScreenMap | null = {} as ScreenMap
): ScreenMap | null {
  const screensRef = useRef<ScreenMap | null>(defaultScreens);
  const [, forceUpdate] = useForceUpdate();
  const responsiveObserver = useResponsiveObserver();

  useLayoutEffect(() => {
    const token = responsiveObserver.subscribe(supportScreens => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });

    return () => responsiveObserver.unsubscribe(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return screensRef.current;
}

export default useBreakpoint;
