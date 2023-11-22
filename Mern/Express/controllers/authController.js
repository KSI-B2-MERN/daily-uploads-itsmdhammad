const authService = require("../services/authService");

module.exports = {
  signUp: (req, res) => {
    try {
      console.log("Request", req.body);
      const serviceResponse = authService.signUp();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },

};
