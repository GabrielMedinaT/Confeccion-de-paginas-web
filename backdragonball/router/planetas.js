const express = require("express");
const router = express.Router();
const Planeta = require("../models/planetas-models");

router.post("/post", async (req, res) => {
  const planeta = new Planeta(req.body);
  try {
    const savedPlaneta = await planeta.save();
    res.json(savedPlaneta);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/get", async (req, res) => {
  try {
    const planetas = await Planeta.find();
    res.json(planetas);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
