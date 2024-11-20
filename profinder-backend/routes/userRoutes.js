const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Route POST pour ajouter un utilisateur
router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Création d'un nouvel utilisateur
    const newUser = new User({ username, email, password });
    await newUser.save(); // Sauvegarde de l'utilisateur dans la base de données
    res.status(201).json(newUser); // Retourner l'utilisateur créé avec un code 201
  } catch (error) {
    res
      .status(400)
      .json({
        error: "Erreur lors de la création de l'utilisateur",
        details: error,
      });
  }
});

module.exports = router;
