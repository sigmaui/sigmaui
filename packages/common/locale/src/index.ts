import en from './en';

// Deep merge utility function
function deepMerge(target: any, source: any): any {
  const result = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key]) &&
        typeof result[key] === 'object' &&
        result[key] !== null &&
        !Array.isArray(result[key])
      ) {
        result[key] = deepMerge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
}

// Utility function to create nested Locales object structure
function createNestedLocales(obj: any, prefix = ''): any {
  const locales: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Create nested object structure
        locales[key] = createNestedLocales(obj[key], newKey);
      } else {
        // Add the flattened key as the value
        locales[key] = newKey;
      }
    }
  }

  return locales;
}

// Create nested Locales object
export const Locales = createNestedLocales(en);

// Add __init__ function to Locales
Locales.__INIT__ = function (addLocales: any) {
  if (!addLocales) {
    return
  }

  const newLocales = createNestedLocales(addLocales);
  const mergedLocales = deepMerge(this, newLocales);
  Object.assign(this, mergedLocales);
};

// Type definitions for better IntelliSense
export type LocaleKeys = keyof typeof Locales;

export default Locales;