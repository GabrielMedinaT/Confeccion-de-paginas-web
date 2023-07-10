import React from "react";
import "./NavBar.css";

export function NavBar({ setRender }) {
  const cambiarRender = (newRender) => {
    setRender(newRender);
  };

  return (
    <div className="navbar">
      <div className="botones">
        <button className="boton" onClick={() => cambiarRender("home")}>
          Home
        </button>
        <button className="boton" onClick={() => cambiarRender("imagen")}>
          Imagen del día
        </button>
        <button className="boton" onClick={() => cambiarRender("objetos")}>
          Objetos Cercanos
        </button>
      </div>
    </div>
  );
}
