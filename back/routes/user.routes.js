const express = require('express');
const router = express.Router();// router d'express
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
// const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
// const upload = multer();

//auth se loguer se deconnecter
router.post("/register", authController.signUp);// on déclenche ds le dossier authController la fonction signUp
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user DB
// fournit moi ds userController tous les users
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);

// upload

// router.post("/upload", upload.single("file") , uploadController.uploadProfil);

module.exports = router;
