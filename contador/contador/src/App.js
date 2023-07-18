import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const aleatorio = () => {
    setContador(Math.floor(Math.random() * 100000));
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{contador}</h2>

      <button onClick={() => aleatorio()}>+</button>
    </div>
  );
}

export default App;
