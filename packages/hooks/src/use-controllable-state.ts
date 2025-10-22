import { useCallback, useMemo, useState } from 'react';

type SetStateAction<T> = T | ((prev: T) => T);

export interface UseControllableStateOptions<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (nextValue: T) => void;
}

export default function useControllableState<T>(
  options: UseControllableStateOptions<T>
): [T, (next: SetStateAction<T>) => void, boolean] {
  const { value, defaultValue, onChange } = options;

  const isControlled = useMemo(() => value !== undefined, [value]);
  const [uncontrolled, setUncontrolled] = useState<T>(() => defaultValue as T);

  const state = (isControlled ? (value as T) : uncontrolled) as T;

  const setState = useCallback(
    (next: SetStateAction<T>) => {
      const resolved = typeof next === 'function' ? (next as any)(state) : next;
      if (!isControlled) setUncontrolled(resolved);
      onChange?.(resolved);
    },
    [isControlled, onChange, state]
  );

  return [state, setState, isControlled];
}
