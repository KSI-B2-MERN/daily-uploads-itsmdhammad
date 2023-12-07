const ProductController = require("../controllers/productController");
const router = require("express").Router();

router.post("/createProduct", ProductController.createProduct);

module.exports = router;
