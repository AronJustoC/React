import React from "react";

const ChildComponent = ({ message }) => {
  return (
    <ul>
      <h2>Componente Hijo</h2>
      <p>{message}</p>
    </ul>
  );
};

export default ChildComponent;
