import en from './en';

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

// Type definitions for better IntelliSense
export type LocaleKeys = keyof typeof Locales;

export default Locales;