import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [nombre, setNombre] = useState("");
  const [animal, setAnimal] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const[enviar, setEnviar] = useState("");

  const onChangeNombre = (event) => {
    setEnviar(false);
    setNombre(event.target.value);
  };
  const onChangeAnimal = (event) => {
    setEnviar(false);
    setAnimal(event.target.value);
  };

  const validNombre = (nombre) => {
    const withoutSpace = nombre.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setMensajeError("Por favor chequea que la información sea correcta");
      return false;
    }
  };

  const validAnimal = (animal) => {
    const withoutSpace = animal.trim();

    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setMensajeError("Por favor chequea que la información sea correcta");
      return false;
    }
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const isNombreValid = validNombre(nombre);

    const isAnimalValid =   validAnimal(animal);

  
    if (isNombreValid && isAnimalValid) {
      setEnviar(true);
      setMensajeError("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={onChangeNombre}
        />
        <input
          type="text"
          placeholder="animal"
          value={animal}
          onChange={onChangeAnimal}
        />
        
        <input type="submit" value="enviar" />
      </form>
      {<div className="error">{mensajeError}</div> }

      {enviar && (
        <Card
          nombre={nombre}
          animal={animal}
         
        />
      )}
    </div>
  );
}

export default App;
