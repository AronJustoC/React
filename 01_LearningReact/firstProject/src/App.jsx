import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent.jsx';
import TextInput from './components/TextInput.jsx';
import ValidateInput from './components/ValidateInput.jsx';
import ControlledUncontrolledInput from './components/ControlledUncontrolledInput.jsx';
import ColorChangingText from './components/ColorChangingText.jsx';
import EnableDisableButton from './components/EnableDisableButton.jsx';
import ToggleText from './components/ToggleText.jsx';
import StatusMessage from './components/StatusMessage.jsx';
import NameList from './components/NameList.jsx';
import EditableList from './components/EditableList.jsx';
import AddObjectForm from './components/AddObjectForm.jsx';
import ObjectList from './components/ObjectList.jsx';
import ChildComponent from './components/ChildComponent.jsx';

function App() {
  // Estado para el contador de clics
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
    console.log(`El botón ha sido clickeado ${clickCount + 1} veces`);
  };

  // Estado para la lista de objetos
  const [items, setItems] = useState([]);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 text-white font-sans p-6">
      {/* Título principal */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-100 font-mono">
        Ejercicios de React Gaa
      </h1>

      {/* Ejercicio 1: Manejo de clics */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Primer ejercicio (onClick)</h2>
        <h3 className="text-lg mb-4">Hola, has clickeado {clickCount} veces</h3>
        <ButtonComponent handleClick={handleClick} />
      </section>

      {/* Ejercicio 2: Entrada de texto */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Segundo ejercicio (onChange)</h2>
        <TextInput />
      </section>

      {/* Ejercicio 3: Validación de entrada */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Tercer ejercicio (onChange)</h2>
        <ValidateInput />
      </section>

      {/* Ejercicio 4: Entrada controlada vs no controlada */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Cuarto ejercicio (onChange)</h2>
        <ControlledUncontrolledInput />
      </section>

      {/* Ejercicio 5: Texto con cambio de color */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Quinto ejercicio (Atributos reactivos)</h2>
        <ColorChangingText />
      </section>

      {/* Ejercicio 6: Habilitar/Deshabilitar botón */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Sexto ejercicio (Atributos reactivos)</h2>
        <EnableDisableButton />
      </section>

      {/* Ejercicio 7: Renderizado condicional */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Séptimo ejercicio (Renderizado condicional)</h2>
        <ToggleText />
      </section>

      {/* Ejercicio 8: Mensaje de estado */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Octavo ejercicio (Renderizado condicional)</h2>
        <StatusMessage />
      </section>

      {/* Ejercicio 9: Lista de nombres */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Noveno ejercicio (Renderizado de listas)</h2>
        <NameList />
      </section>

      {/* Ejercicio 10: Lista editable */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Décimo ejercicio (Renderizado de listas)</h2>
        <EditableList />
      </section>

      {/* Ejercicio 11: Gestión de objetos */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Undécimo ejercicio (Renderizado de listas)</h2>
        <h3 className="text-xl mb-4">Object Manager</h3>
        <AddObjectForm onAdd={handleAddItem} />
        <ObjectList items={items} />
      </section>

      {/* Ejercicio 12: Comunicación entre componentes */}
      <section className="bg-blue-800/50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Duodécimo ejercicio (Props padre-hijo)</h2>
        <h3 className="text-xl mb-4">Componente padre</h3>
        <ChildComponent message="Mensaje enviado desde el componente padre" />
      </section>
    </div>
  );
}

export default App;
