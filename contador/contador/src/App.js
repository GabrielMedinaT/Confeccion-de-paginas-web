import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(1);

  const aleatorio = () => {
    setContador(contador + 1);
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
