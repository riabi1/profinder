const mongoose = require("mongoose");

// Schéma pour un utilisateur
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Modèle d'utilisateur basé sur le schéma
const User = mongoose.model("User", userSchema);

module.exports = User;
