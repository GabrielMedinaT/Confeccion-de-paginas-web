import React, { useEffect, useState } from "react";
import axios from "axios";

const Prediccion = () => {
  const [urlPrediccion, setUrlPrediccion] = useState("");
  const [resespcifica, setResespcifica] = useState([]);

  const obtenerPrediccion = async () => {
    const res = await axios.get(
      "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/35006?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbnRyb3BpYTdAZ21haWwuY29tIiwianRpIjoiYTU2MzRlYWMtM2Q5YS00ZmYxLTkzOGMtMGY0ZDk1MGY2Nzk5IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2ODkwOTUyOTksInVzZXJJZCI6ImE1NjM0ZWFjLTNkOWEtNGZmMS05MzhjLTBmNGQ5NTBmNjc5OSIsInJvbGUiOiIifQ.iN3pz0Vn6z56XdeVtEMRnxSfaNTsYzbw_lqnuNMwflE"
    );
    console.log(res.data);
    setUrlPrediccion(res.data.datos);
  };

  const obtenerPrediccionEspecifica = async () => {
    try {
      const respuesta = await axios.get(
        "https://opendata.aemet.es/opendata/sh/8c5fe4b8"
      );
      setResespcifica(respuesta.data); // Actualizar el estado
      console.log(resespcifica); // Verificar el estado actualizado
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };

  console.log(urlPrediccion);

  useEffect(() => {
    obtenerPrediccion();
    setTimeout(() => {
      obtenerPrediccionEspecifica();
    }, 1000);
  }, []);

  return (
    <div>
      Prediccion
      <button onClick={obtenerPrediccion}>Arucas</button>
      {resespcifica[0]?.prediccion?.dia.map((item, index) => {
        return (
          <div key={index}>
            <h2>Periodo: {item.periodo}</h2>
            {item.estadoCielo.map((estado, estadoIndex) => (
              <div key={estadoIndex}>
                <p>Descripción del cielo: {estado.descripcion}</p>
                <p>Hora: {estado.periodo}</p>
                <p>Temperatura: {estado.temperatura}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Prediccion;
