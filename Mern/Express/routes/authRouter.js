const authController = require("../controllers/authController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const resetController = require("../controllers/resetController");



const router = require("express").Router();

router.post("/signUp", authController.signUp);
router.post("/login", loginController.login);
router.get("/logout", logoutController.logout);
router.get("/reset", resetController.reset);

module.exports = router;
