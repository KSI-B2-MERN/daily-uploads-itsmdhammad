const productController = require("../controllers/productController");

const router = require("express").Router();

console.log("Router");
router.post("/addProduct", productController.addProduct);


module.exports = router;
