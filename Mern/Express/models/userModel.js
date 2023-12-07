const {models} = require('./index');

module.exports = {
    createUser: async (body, userID)=>{
        try{
            const createUser = await models.USERS.create({
                userID,
                ...body,
            });
            return {
                response: createUser,
            };
        }catch(error){
            return {
                error: error,
            };
        }
    },

    // check krega k same email se pehle user majood he ya ni.
    getUserByEmail: async(email)=>{
        try{
            const user = await models.USERS.findOne({
                where: {
                    email: email,
                },
            });
            return{
                response: user,
            };
        }catch(error){
            error: error;
        };
    },

    // getAllUsers: async()=>{
    //     try{
    //         const users = await models.USERS.findAll({
    //         });
    //         return{
    //             response: users,
    //         };
    //     }catch(error){
    //         error: error;
    //     };
    // },
    
    getAllUsers: async (offset, limit) => {
        try {
          const users = await models.USERS.findAll({
            attributes: {
              exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
            },
            include: {
              model: models.ROLES,
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
            },
            offset: offset,
            limit: limit,
          });
          return {
            response: users,
          };
        } catch (error) {
          return {
            error: error,
          };
        }
      },
    
      deletesUser: async (userID) => {
        try {
          const user = await models.USERS.destroy({
            where: {
              userID: userID,
            },
          });
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