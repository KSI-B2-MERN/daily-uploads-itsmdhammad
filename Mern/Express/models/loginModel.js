const {models} = require('../models');

module.exports = {    
    login: async(body) => {
      try {
        const user = await models.USERS.findOne({
          where: {
            email: email,
          },
        })
        return {
          reponse: user,
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
  };
  