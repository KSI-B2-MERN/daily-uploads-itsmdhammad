const roleController = require("../controllers/roleController");
const router = require("express").Router();

router.post("/createRole", roleController.createRole);

module.exports = router;
