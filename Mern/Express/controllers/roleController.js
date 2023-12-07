const roleService = require("../services/roleService");
const joi = require("joi");

const roleSchema = joi.object().keys({
    Role: joi.string().required()
});

module.exports = {
    createRole: async (req, res)=>{
        console.log("roleController", req.body)
        try{
            const validate = await roleSchema.validateAsync(req.body);
            const createRole = await roleService.createRole(validate);
            if(createRole.error){
                return res.send({
                    error: createRole.error,
                })       
            }
        return res.send({
            response: createRole.response,
        })
    }
        catch(error){
            return res.send({
                error: error,
            });
        }
    },
};