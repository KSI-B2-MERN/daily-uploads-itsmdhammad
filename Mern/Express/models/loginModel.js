module.exports = {    
    login: () => {
      try {
        return {
          reponse: "user logged in",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
  };
  