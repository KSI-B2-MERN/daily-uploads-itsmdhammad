const authService = require("../services/resetService");

module.exports = {
  reset: (req, res) => {
    try {
      console.log("Request", req.body);
      const serviceResponse = authService.reset();
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
