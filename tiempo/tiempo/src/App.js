import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Prediccion from "./components/Prediccion";

function App() {
  const [render, setRender] = React.useState(false);

  return (
    <div className="App">
      <NavBar setRender={setRender} />

      {render === "prediccion" && <Prediccion />}
    </div>
  );
}

export default App;
