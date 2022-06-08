const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
// require("dotenv").config({path: './configuration'}); //config du fichier .env
require('./config/db')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');//bdd mongo
//routes
app.use('/api/user', userRoutes);

// require('./config/db');
const path = require("path"); //donne acces au chemin du système de fichier

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-Orifin-Ressource-Policy", "cross-origin");
  next();
});

module.exports = app;
