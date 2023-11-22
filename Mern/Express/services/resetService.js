const authModel = require("../models/resetModel");

module.exports = {
  reset: () => {
    try {
      const signUpResponse = authModel.reset();
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
