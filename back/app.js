const express = require("express");
const app = express();

const cookieParser = require ('cookie-parser');
const{checkUser, requireAuth}= require('./middleware/auth.middleware')
require("dotenv").config(); //config du fichier .env

require('./config/db');


const mongoose = require('mongoose');//bdd mongo
//routes

app.use(express.json());


const userRoutes = require("./routes/user.routes");

// const path = require("path"); //donne acces au chemin du système de fichier



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
  res.setHeader("Cross-Origin-Ressource-Policy", "cross-origin");
  next();
});

app.use(cookieParser());
//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});


//routes
app.use('/api/user', userRoutes);

module.exports = app;
