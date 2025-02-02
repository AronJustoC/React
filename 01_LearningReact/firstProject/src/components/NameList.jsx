import React from "react";

const NameList = () => {
  const names = ['Juan', 'Maria', 'Pedro', 'Lucho', 'Pirlo', 'Marta', 'Ana'];

  return (
    <div>
      <h3>Lista de nombres: </h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
