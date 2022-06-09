const router = require("express").Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

//auth se loger se deconnecter
router.post("/register", authController.signUp);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
