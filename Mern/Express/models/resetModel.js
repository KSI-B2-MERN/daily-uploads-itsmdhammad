module.exports = {    
    reset: () => {
      try {
        return {
          reponse: "Password reset successfully",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
  };
  