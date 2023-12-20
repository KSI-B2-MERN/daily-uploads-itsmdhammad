const productService = require("../services/productservice");


module.exports = {
  addProduct: async (req, res) => {
    try {
      console.log("Data From API: ", req.body);
      const addProductResponse = await productService.signUp(req.body);
      if (addProductResponse.error) {
        return res.send({ error: addProductResponse.error });
      }
      return res.send({ response: addProductResponse.response });
    } catch (error) {
      return res.send({ error: error });
    }
  },

};
