import React, { useState } from "react";

const ColorChangingText = () => {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value); //asigna el valor del input a la variable color
  };

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={handleChange}
        placeholder="Enter a color"
      />
      <p className={`text-${color}-300`}>Este texto cambia de color</p>
    </div>
  )
}

export default ColorChangingText;
