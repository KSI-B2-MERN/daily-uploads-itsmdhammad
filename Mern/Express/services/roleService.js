const roleModel = require("../models/roleModel");
const {v4:uuidv4} = require("uuid");

module.exports = {
    createRole: async (body)=>{
        console.log("rolebodyService", body)
        try{
            const roleID = uuidv4();
            const createRole = await roleModel.createRole(body.Role, roleID)
            if(createRole.error) {
                return{
                    error: error,
                }
            };
            return {
                response: createRole.response,
            };
        }
        catch(error){
            return {
                error: error,
            };
        }
    },
};