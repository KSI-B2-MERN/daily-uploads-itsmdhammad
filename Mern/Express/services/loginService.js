const authModel = require("../models/loginModel");

module.exports = {
  login: () => {
    try {
      const signUpResponse = authModel.login();
      if (signUpResponse.reponse) {
        return {
          response: signUpResponse.reponse,
        };
      }
      return {
        error: signUpResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
