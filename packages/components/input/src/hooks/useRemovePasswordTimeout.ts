import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

import type { InputRef } from '../Input';

export default function useRemovePasswordTimeout(
  inputRef: RefObject<InputRef | null>,
  triggerOnMount?: boolean
) {
  const removePasswordTimeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(
      setTimeout(() => {
        if (
          inputRef.current?.input &&
          inputRef.current?.input.getAttribute('type') === 'password' &&
          inputRef.current?.input.hasAttribute('value')
        ) {
          inputRef.current?.input.removeAttribute('value');
        }
      })
    );
  };

  useEffect(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }

    return () =>
      // eslint-disable-next-line react-hooks/exhaustive-deps
      removePasswordTimeoutRef.current.forEach(timer => {
        if (timer) {
          clearTimeout(timer);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return removePasswordTimeout;
}
