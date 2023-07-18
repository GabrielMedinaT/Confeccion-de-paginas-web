const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const personajesRouter = require("./router/personajes");
const planetas = require("./router/planetas");
const port = 5000;

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/personajes", personajesRouter);
app.use("/planetas", planetas);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() =>
    app.listen(5000, () =>
      console.log(
        "Conectado a la base de datos y escuchando por el puerto " + port
      )
    )
  )
  .catch((err) => console.log(err + "---" + process.env.MONGO_DB_URI));
