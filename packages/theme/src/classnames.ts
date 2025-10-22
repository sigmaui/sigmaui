/**
 * @module classNames
 * A tiny utility function for conditionally joining class names together.
 *
 * Inspired by `classnames` by Jed Watson, rewritten in modern TypeScript
 * with full type safety and ESM + CJS compatibility.
 */

export type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassDictionary
  | ClassArray;

/**
 * Object map of conditional class names.
 *
 * Each key represents a class name and will be included in the final
 * string if the corresponding value is truthy.
 *
 * @example
 * ```ts
 * classNames({ active: true, disabled: false });
 * // => "active"
 * ```
 */
export interface ClassDictionary {
  [className: string]: any;
}

/**
 * Recursive array of class names, objects, or nested arrays.
 *
 * @example
 * ```ts
 * classNames(['btn', { active: true }, ['nested', { deep: true }]]);
 * // => "btn active nested deep"
 * ```
 */
export interface ClassArray extends Array<ClassValue> {}

/**
 * Conditionally joins class names into a single string.
 *
 * Supports:
 * - Strings and numbers (added directly)
 * - Arrays (flattened recursively)
 * - Objects (keys included if their values are truthy)
 * - Ignores `null`, `undefined`, and `false` values
 *
 * @example
 * ```ts
 * classNames('btn', 'btn-primary');
 * // => "btn btn-primary"
 *
 * classNames('btn', { active: true, disabled: false });
 * // => "btn active"
 *
 * classNames(['foo', ['bar', { baz: true }]]);
 * // => "foo bar baz"
 * ```
 *
 * @param args - List of class name fragments to combine.
 * @returns A single space-separated class name string.
 */
export function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
      continue;
    }

    if (Array.isArray(arg)) {
      const inner = classNames(...arg);
      if (inner) classes.push(inner);
      continue;
    }

    if (typeof arg === 'object') {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

export default classNames;
