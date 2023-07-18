import React from "react";

const NavBar = ({ setRender }) => {
  const cambiarRender = (newrender) => {
    setRender(newrender);
  };
  return (
    <div>
      <button onClick={() => cambiarRender("prediccion")}>prediccion</button>
    </div>
  );
};

export default NavBar;
