import { useCallback, useState } from 'react';

export default function useBoolean(initial = false) {
  const [value, setValue] = useState<boolean>(initial);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(v => !v), []);

  return { value, setTrue, setFalse, toggle, set: setValue } as const;
}
