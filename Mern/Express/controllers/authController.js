const authService = require("../services/authService");
const joi = require("joi");

const signUpSchema = joi.object().keys({
  firstName : joi.string().required().min(3),
  lastName : joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  confirmPassword: joi.ref("password"),
})

module.exports = {
  signUp: async (req, res) => {
    try {
      const validate = await signUpSchema.validateAsync(req.body)
      console.log("Request", req.body);
      const serviceResponse = await authService.signUp(validate);

    if (serviceResponse.error) {
      res.send({
        error: serviceResponse.error,
      });
    }
        res.send({response: serviceResponse.response,});      
    
  } catch (error) {
    res.send({
      error: error,
    });
  }
  },

};


    //   if (serviceResponse.response) {
    //     res.send({
    //       response: serviceResponse.response,
    //     });
    //   }
    //   res.send({
    //     error: serviceResponse.error,
    //   });
    // } catch (error) {
    //   res.send({
    //     error: error,
    //   });
    // }