module.exports = {
    signUp: () => {
      try {
        return {
          reponse: "user signed up",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },

  };
  