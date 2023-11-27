module.exports = {
    signUp: async (body) => {
      try {
        // delete body.confirmPassword;
        return {
          // reponse: "user signed up",
          response: body,
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },

  };
  