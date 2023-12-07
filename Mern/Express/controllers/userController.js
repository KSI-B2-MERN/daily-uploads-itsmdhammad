const userService = require("../services/userService");
const joi = require("joi");

const userSchema = joi.object().keys({
    roleID : joi.string().required(),
    firstName : joi.string().required().min(3).max(34),
    lastName : joi.string().required().min(3).max(34),
    email: joi.string().email().required().max(34),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,300}$')),
});

// schema for pagination concept
const paginationSchema = joi.object().keys({
  pageNo: joi.number().positive().greater(0),
  limit: joi.number().valid(5),
});

const getByIdSchema = joi.object().keys({
    userId: joi.string().required(),
  });

module.exports = {
    createUser: async (req, res)=>{
        // console.log("roleController", req.body)
        try{
            const validate = await userSchema.validateAsync(req.body);
            const createUser = await userService.createUser(validate);
            if(createUser.error){
                return res.send({
                    error: createUser.error,
                })       
            }
        return res.send({
            response: createUser.response,
        })
    }
        catch(error){
            return res.send({
                error: error,
            });
        }
    },

    // get all user from database and show on frontend/Postman
    getAllUsers: async (req, res) => {
        try {
          const validate = await paginationSchema.validateAsync(req.query);
          const users = await userService.getAllUsers(validate);
          if (users.error) {
            return res.send({
              error: users.error,
            });
          }
          return res.send({
            response: users.response,
          });
        } catch (error) {
          return res.send({
            error: error,
          });
        }
      },

      //Deletes a user from the database
      
      deletesUser: async (req, res) => {
        try {
          const validate = await getByIdSchema.validateAsync(req.query);
          const user = await userService.deletesUser(validate);
          if (user.error) {
            return res.send({
              error: user.error,
            });
          }
          return res.send({
            response: user.response,
          });
        } catch (error) {
          return {
            error: error,
          };
        }
      },

};