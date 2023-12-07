const loginService = require("../services/loginService");
const joi = require("joi");

// const loginSchema = joi
const loginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = {
  // login: (req, res) => {
  //   try {
  //     console.log("Request", req.query);
  //     const serviceResponse = authService.login();
  //     if (serviceResponse.response) {
  //       res.send({
  //         response: serviceResponse.response,
  //       });
  //     }
  //     res.send({
  //       error: serviceResponse.error,
  //     });
  //   } catch (error) {
  //     res.send({
  //       error: error,
  //     });
  //   }
  // },

  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      console.log("Validate:", validate);
      const serviceResponse = await loginService.login(validate);
      console.log("serviceResponse:", serviceResponse);
      if (serviceResponse.error) {
        return res.send({ error: serviceResponse.error });
      }

      const cookies = {
        token: serviceResponse.response,
      };

      const hour = 60 * 60 * 1000;
      res.cookie("auth", cookies, {
        maxAge: hour,
        httpOnly: true,
      });

      return res.send({ response: serviceResponse.response });
    } catch (error) {
      return res.send({ error: error });
    }
  },
};
