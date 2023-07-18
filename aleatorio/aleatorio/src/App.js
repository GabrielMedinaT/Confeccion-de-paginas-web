import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [aleatorio, setAleatorio] = useState(0);

  const generarAleatorio = () => {
    setAleatorio(Math.floor(Math.random() * 100000000));
  };
  return (
    <div className="App">
      <h1>Generador de números aleatorios</h1>
      <h2>{aleatorio}</h2>
      <button onClick={generarAleatorio}>Generar</button>
    </div>
  );
}

export default App;
