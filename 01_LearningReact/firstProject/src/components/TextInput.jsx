import React from 'react';
import { useState } from 'react';

const textInput = () => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    console.log(`El valor actual es: ${text}`);
    setText(e.target.value);
  };

  return (
    <div>
      <input
        className='border border-blue-200 p-1 my-2'
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p>El valor actual es: {text}</p>
    </div>
  )
}

export default textInput;
