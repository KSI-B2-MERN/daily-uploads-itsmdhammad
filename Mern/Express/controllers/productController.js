const productService = require("../services/productService");
const joi = require("joi");

const ProductSchema = joi.object().keys({
    Product: joi.string().required()
});

module.exports = {
    createProduct: async (req, res)=>{
        console.log("ProductController", req.body)
        try{
            const validate = await ProductSchema.validateAsync(req.body);
            const createProduct = await productService.createProduct(validate);
            if(createProduct.error){
                return res.send({
                    error: createProduct.error,
                })       
            }
        return res.send({
            response: createProduct.response,
        })
    }
        catch(error){
            return res.send({
                error: error,
            });
        }
    },
};