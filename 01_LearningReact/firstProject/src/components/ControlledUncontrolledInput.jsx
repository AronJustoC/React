import React from "react";
import { useState, useRef } from "react";

const ControlledUncontrolledInput = () => {
  const [controlledValue, setControlledValue] = useState('');
  const uncontrolledRef = useRef();

  const handleControlledChange = (e) => {
    setControlledValue(e.target.value);
  };

  const handleUncontrolledChange = () => {
    console.log(uncontrolledRef.current.value);
  };

  return (
    <div>
      <input
        className="border-2 border-gray-200"
        type="text"
        value={controlledValue}
        onChange={handleControlledChange}
      />
      <p>Valor controlado: {controlledValue}</p>

      <input
        className="border-2 border-gray-200"
        type="text"
        ref={uncontrolledRef}
        onChange={handleUncontrolledChange}
      />
      <p>Valor no controlado: {uncontrolledRef.current ? uncontrolledRef.current.value : ''}</p>
    </div>
  )
}

export default ControlledUncontrolledInput;
