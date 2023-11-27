const authModel = require("../models/authModel");
const bcrypt = require('bcrypt');

module.exports = {
  signUp: async (body) => {
    try {
      delete body.confirmPassword;
      body.password= await bcrypt.hash(body.password, 10);
      const signUpResponse = await authModel.signUp(body);

      if (signUpResponse.error) {
        return {
          error: signUpResponse.error,
        };
      }
      return {
        response: signUpResponse.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

};
