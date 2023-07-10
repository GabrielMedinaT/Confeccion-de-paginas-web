const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

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
