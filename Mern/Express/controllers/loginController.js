const authService = require("../services/loginService");

module.exports = {
  login: (req, res) => {
    try {
      console.log("Request", req.query);
      const serviceResponse = authService.login();
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
