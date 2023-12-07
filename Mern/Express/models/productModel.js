const {models} = require('./index');

module.exports = {
    createProduct: async (Product, ProductName)=>{
        console.log("roleModel", Product)
        try{
            const createRole = await models.PRODUCT.create({
                Product, ProductName
            });
            return {
                response: createProduct,
            };
        }catch(error){
            return {
                error: error,
            };
        }
    },
};