import React from 'react';
import { useState } from 'react';


const ValidateInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value; // El valor del input se guarda en la variable value
    if (isNaN(value)) {
      setError('Solo se permiten números');
    } else {
      setError('');
    }
    setInputValue(value); // El valor de value se guarda en el estado inputValue
  };

  return (
    <div>
      <input
        className='border-2 border-gray-300 p-2'
        type='text'
        value={inputValue}
        onChange={handleChange} />
      {error && <p className='text-red-500'>{error}</p>}
      <p>El valor es: {inputValue}</p>
    </div>
  )
}

export default ValidateInput;
