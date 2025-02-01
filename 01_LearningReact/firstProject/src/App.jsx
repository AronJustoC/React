import React from 'react'
import { useState } from 'react'
import ButtonComponent from './components/ButtonComponent.jsx'
import TextInput from './components/TextInput.jsx'
import ValidateInput from './components/ValidateInput.jsx';
import ControlledUncontrolledInput from './components/ControlledUncontrolledInput.jsx';
import ColorChangingText from './components/ColorChangingText.jsx';
import EnableDisableButton from './components/EnableDisableButton.jsx';
import ToggleText from './components/ToggleText.jsx';

function App() {
  //############### Primer ejercicio (onClick) ###############
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(`El botón ha sido clickeado ${count + 1} veces`);
  };
  //############### Segundo ejercicio (onChange) ##############
  return (
    <div className='text-center bg-blue-700 h-[100%] font-bold'>
      <h1 className='text-2xl font-mono font-bold mb-3 text-blue-100 '>Ejercicios de React Gaa</h1>
      <h2 className='text-xl text-red-200 font-bold mt-6'>Primer ejercicio (onClick)</h2>
      <h3 className=''>Hola mierdas, has clickeado {count} veces</h3>
      <ButtonComponent handleClick={handleClick} />
      <br />
      <h2 className='text-xl text-red-200 font-bold mt-6'>Segundo ejercicio (onChange)</h2>
      <TextInput />
      <h2 className='text-xl text-red-200 font-bold mt-6'>Tercer ejercicio (onChange)</h2>
      <ValidateInput />
      <h2 className='text-xl text-red-200 font-bold mt-6'>Cuarto ejercicio (onChange)</h2>
      <ControlledUncontrolledInput />
      <h2 className='text-xl text-red-200 font-bold mt-6'>Quinto ejercicio (Atributos reactivos)</h2>
      <ColorChangingText />
      <h2 className='text-xl text-red-200 font-bold mt-6'>Sexto ejercicio (Atributos reactivos)</h2>
      <EnableDisableButton />
      <h2 className='text-xl text-red-200 font-bold mt-6'>Septimo ejercicio (Atributos reactivos)</h2>
      <ToggleText />




    </div>

  )
}

export default App
