const express = require("express");
const router = express.Router();
const Personaje = require("../models/personajes-model");

router.post("/post", async (req, res) => {
  const personaje = new Personaje(req.body);
  try {
    const savedPersonaje = await personaje.save();
    res.json(savedPersonaje);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/get", async (req, res) => {
  try {
    const personajes = await Personaje.find();
    res.json(personajes);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
