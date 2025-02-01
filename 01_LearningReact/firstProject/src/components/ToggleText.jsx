import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? "Hide" : "Show"} texto
      </button>
      {isVisible && <p>Texto que se puede ocultar</p>}
    </div>
  )
}

export default ToggleText;
