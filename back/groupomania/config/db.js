const mongoose = require("mongoose");

// const express = require("express");
mongoose
  .connect("mongodb+srv://nad:oupszeg@cluster0.j6l7m.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
