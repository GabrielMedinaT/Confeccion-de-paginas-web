const mongoose = require("mongoose");
const { Schema } = mongoose;

const personajeSchema = new Schema({
  nombre: String,
  nombreJapon: String,
  otrosNombres: [{ type: String }],
  descripcion: String,
  sexo: String,
  nacimiento: String,
  defuncion: [{ type: String }],
  especie: String, //*OTRO MODELO
  raza: String, //*OTRO MODELO
  ocupacion: [{ type: String }],
  procedencia: String, //*OTRO MODELO DE PLANETAS
  transformaciones: [{ type: String }], //*OTRO MODELO DE TRANSFORMACIONES
  fusiones: [{ type: String }], //*OTRO MODELO DE FUSIONES
  familia: [{ type: String }], //*MISMO MODELO DE PERSONAJES
  afiliados: [{ type: String }], //*MISMO MODELO DE PERSONAJES
});

module.exports = mongoose.model("Personaje", personajeSchema);
