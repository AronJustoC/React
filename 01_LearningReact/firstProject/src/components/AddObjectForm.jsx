import React, { useState } from "react";
const AddObjectForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, value });
    setName('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Value:</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddObjectForm;
