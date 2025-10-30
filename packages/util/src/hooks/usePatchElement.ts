import * as React from 'react';

/**
 * usePatchElement
 *
 * A React hook for dynamically managing a list of React elements (e.g., messages, modals, notifications).
 * It allows you to temporarily mount elements and later remove them safely — similar to a mount/unmount lifecycle.
 *
 * @returns {[React.ReactElement[], (element: React.ReactElement) => () => void]}
 *
 * - The first item (React.ReactElement[]) is the current list of elements that should be rendered.
 * - The second item is a function `patchElement(element)` that:
 *     → Adds the element into the list.
 *     → Returns a cleanup function that removes that element when called.
 *
 * Example usage:
 * ```tsx
 * const [elements, patchElement] = usePatchElement();
 *
 * const remove = patchElement(<Message content="Hello" />);
 * // ...later
 * remove(); // removes the message element
 * ```
 */
export default function usePatchElement(): [
  React.ReactElement[],
  (element: React.ReactElement) => () => void,
] {
  const [elements, setElements] = React.useState<React.ReactElement[]>([]);

  const patchElement = React.useCallback((element: React.ReactElement) => {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [...originElements, element]);

    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }, []);

  return [elements, patchElement];
}
