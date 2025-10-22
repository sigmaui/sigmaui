import { useCallback, useRef } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';

export default function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef<T>(fn);

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  // eslint-disable-next-line react-hooks/use-memo
  return useCallback(((...args: Parameters<T>) => ref.current(...args)) as T, []);
}
