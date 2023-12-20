const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  addProduct: async (body, productId) => {
    try {
      const createdProduct = await models.products.create({
        userId,
        ...body,
      });
      return {
        response: createdProduct,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};