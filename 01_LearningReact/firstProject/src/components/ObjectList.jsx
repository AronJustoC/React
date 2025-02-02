import React from "react";

const ObjectList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name} - {item.value}</li>
      ))}
    </ul>
  );
};

export default ObjectList;
