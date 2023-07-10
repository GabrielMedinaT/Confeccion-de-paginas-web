import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { ImagenDelDia } from "./components/ImagenDelDia";
import { ObjetosCercanos } from "./components/ObjetosCercanos";

function App() {
  const [render, setRender] = React.useState("home");
  return (
    <div>
      <NavBar setRender={setRender} />

      {/* Renderizamos el componente correcto según el estado 'render' */}
      {render === "home" && <Home />}
      {render === "imagen" && <ImagenDelDia />}
      {render === "objetos" && <ObjetosCercanos />}
    </div>
  );
}

export default App;
