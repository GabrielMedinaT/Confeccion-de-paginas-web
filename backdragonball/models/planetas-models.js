const mongoose = require("mongoose");

const { Schema } = mongoose;

const planetaSchema = new Schema({
  nombre: String,
  localizacion: String,
  gobernante: String,
  residentes: [{ type: String }],
  especiesNativas: [{ type: String }],
});

module.exports = mongoose.model("Planeta", planetaSchema);
