const mongoose = require("mongoose");

// Schéma pour un Worker
const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service", // Lien vers le modèle Service
    },
  ],
});

// Modèle Worker basé sur le schéma
const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;
