module.exports = {    
    logout: () => {
      try {
        return {
          reponse: "user logout successfully",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
  };
  