const productModel = require("../models/productmodel");
const config = require("../config/config.json");
const { v4: uuidV4 } = require("uuid");

module.exports = {
  addProduct: async (body) => {
    try {
        const productId = uuidV4();
      const addProductResponse = await productModel.addProduct(productId, body);
      if (addProductResponse.error) {
        return {
          error: addProductResponse.error,
        };
      }
      return {
        response: addProductResponse.reponse,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },


}