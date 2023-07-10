import axios from "axios";
import { React, useState, useEffect } from "react";

export function ImagenDelDia() {
  const [imagen, setImagen] = useState([]);

  //* OBTENER DATOS DE IMAGEN DEL DIA

  const obtenerImagen = async () => {
    const respuesta = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setImagen(respuesta.data);
  };

  useEffect(() => {
    obtenerImagen();
  }, []);

  return (
    <div>
      <h1>Imagen Del dia</h1>
      <h2>{imagen.title}</h2>
      <p>{imagen.explanation}</p>
      <img src={imagen.url} alt={imagen.title} />
    </div>
  );
}
