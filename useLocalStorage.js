import { useState, useEffect } from 'react';

/**
 * useLocalStorage.js
 *
 * - A custom hook that creates a state item and stores it in localStorage
 * - For example:
 *   const [format, setFormat] = useLocalStorage('format', 'hex');
 *
 * @param {string} key The key for the localStorage key/value pair
 * @param {string} defaultValue The default value
 * @returns {Array} containing state and function for updating state
 */
function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    // Check if anything exists in localStorage, if not, use defaultValue
    let value;
    if (typeof window !== "undefined") {
      value = window.localStorage.getItem(key);
    }
    return value ? JSON.parse(value) : defaultValue;
  });

  // update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  // return state value and a function to update it
  return [state, setState];
}

export default useLocalStorage;