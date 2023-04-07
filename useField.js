import { useState } from 'react';

/**
 * useField.js
 *
 * - A custom hook that creates a value for controlled form elements
 * - For example:
 *   const [email, updateEmail, resetEmail] = useField('');
 *
 * @param {string} initialValue optional initial value
 * @returns {Array} containing state and function for updating state
 */
function useField(initialValue='') {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
}

export default useField;
