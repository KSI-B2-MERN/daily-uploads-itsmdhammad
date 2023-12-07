const {models} = require('./index');

module.exports = {
    createRole: async (Role, roleID)=>{
        console.log("roleModel", Role)
        try{
            const createRole = await models.ROLES.create({
                Role, roleID
            });
            return {
                response: createRole,
            };
        }catch(error){
            return {
                error: error,
            };
        }
    },
};