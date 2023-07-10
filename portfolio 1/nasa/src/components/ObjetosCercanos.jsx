import axios from "axios";
import React, { useState, useEffect } from "react";

export function ObjetosCercanos() {
  const [objetos, setObjetos] = useState([]);

  //* OBTENER DATOS DE OBJETOS CERCANOS
  const getObjetos = async () => {
    const respuesta = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${process.env.REACT_APP_API_KEY}`
    );
    setObjetos(respuesta.data.near_earth_objects["2015-09-08"]);
  };

  useEffect(() => {
    getObjetos();
  }, []); // Se invoca getObjetos cuando el componente se monta

  return (
    <div>
      {/* Aquí renderizamos algo basado en los datos que hemos guardado en 'objetos' */}
      {objetos.map((objeto) => (
        <div key={objeto.id}>
          <h2>{objeto.name}</h2>
          <p>
            Diámetro estimado (metros):{" "}
            {objeto.estimated_diameter.meters.estimated_diameter_max}
          </p>
          <p>
            Amenaza potencial:{" "}
            {objeto.is_potentially_hazardous_asteroid ? "Sí" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
}
