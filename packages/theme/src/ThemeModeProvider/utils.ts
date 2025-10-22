export const saveToLS = (storageKey: string, value: string) => {
  // Save to storage
  try {
    localStorage.setItem(storageKey, value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    // Unsupported
  }
};
