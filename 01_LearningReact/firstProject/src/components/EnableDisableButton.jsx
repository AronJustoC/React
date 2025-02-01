import React, { useState } from 'react';

const EnableDisableButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder='Tipea lago causa'
      />
      <button disabled={!inputValue} className={inputValue ? "" : "hidden"}
      >Enviar</button>
    </div>
  );
};

export default EnableDisableButton;
