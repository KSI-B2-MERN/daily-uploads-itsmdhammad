const authModel = require("../models/logoutModel");

module.exports = {
  logout: () => {
    try {
      const signUpResponse = authModel.logout();
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
