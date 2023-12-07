const userModel = require("../models/userModel");
const {v4:uuidV4} = require("uuid");
const bcrypt = require('bcrypt');

module.exports = {
    createUser: async (body)=>{
        try{
            const userID = uuidV4();
            // check k user with same already exists or not.
            const user = await userModel.getUserByEmail(body.email);
            console.log("user", user);
            if(user.response || user.error){
                return{
                    error:"User with this email already exists",
                }
            };

            body.password= await bcrypt.hash(body.password, 10); 
            const createUser = await userModel.createUser(body, userID)
            console.log("created user", createUser.response.dataValues);

            if(createUser.error) {
                return{
                    error: error,
                }
            };

            delete createUser.response.dataValues.password;
            return {
                response: createUser.response,
            };
        }
        catch(error){
            return {
                error: error,
            };
        }
    },


    // getAllUsers: async()=>{
    //     try{
    //         const users = await models.userModel.getAllUsers({
    //         if(!users.response || users.error){
    //             return{
    //                 error: "Users not exists",
    //             };
    //         }
    //         });
    //         return{
    //             response: users.response,
    //         };
    //     }catch(error){
    //         error: error;
    //     };
    // },

    getAllUsers: async (query) => {
        try {
          const offset = (query.pageNo - 1) * query.limit;
          const users = await userModel.getAllUsers(offset, query.limit);
    
          if (!users.response || users.error) {
            return {
              error: "no user exists",
            };
          }
          return {
            response: users.response,
          };
        } catch (error) {
          return {
            error: error,
          };
        }
      },
    
      deletesUser: async (query) => {
        try {
          const user = await userModel.deletesUser(query.userId);
          return {
            response: user,
          };
        } catch (error) {
          return {
            error: error,
          };
        }
      },
};