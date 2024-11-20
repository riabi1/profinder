// routes/serviceRoutes.js
const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// Ajouter un service
router.post("/", async (req, res) => {
  const { name, description } = req.body;

  try {
    const newService = new Service({ name, description });
    await newService.save();
    res
      .status(201)
      .json({ message: "Service created successfully", service: newService });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la création du service", details: err });
  }
});

// Obtenir tous les services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Erreur lors de la récupération des services",
        details: err,
      });
  }
});

module.exports = router;
