import React, { useState } from "react";

const EditableList = () => {
  const [items, setItems] = useState(['Elemento 1', 'Elemento 2']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h3>Lista Editable</h3>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default EditableList;
