import { useState } from 'react';

/**
 * useToggle.js
 *
 * - A custom hook that toggles a boolean value
 * - For example:
 *   const [mode, toggleMode] = useToggle(true);
 *
 * @param {boolean} initialValue optional initial value
 * @returns {Array} containing state and function for toggling state
 */
function useToggle(initialValue=false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggle;