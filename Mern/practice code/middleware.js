const jwt = require("jsonwebtoken");
const sessionModel = require("./models/sessionModel");
const userModel = require("./models/userModel");
const config = require("./config/config.json");

module.exports = {
  customer: async (req, res, next) => {
    try {
      const token = req.cookies.auth.token.token;
      jwt.verify(token, config.jwt.secret, async (error, data) => {
        if (error) {
          return res.send({
            error: error,
          });
        }
        const session = await sessionModel.getSessionByUserId(data.userId);
        if (session.error || !session.response) {
          return res.send({
            error: "unauthorized error",
          });
        }
        const role = await userModel.getRoleByUserId(data.userId);
        if (role.error || !role.response) {
          return res.send({
            error: "Invalid request",
          });
        }

        if (role.response.dataValues.role.dataValues.role !== "CUSTOMER") {
          return res.send({
            error: "unauthorized error",
          });
        }
        next();
      });
    } catch (error) {
      return res.send({
        message: "Invalid request",
      });
    }
  },

  vendor: async (req, res, next) => {
    try {
      const token = req.cookies.auth.token.token;
      jwt.verify(token, config.jwt.secret, async (error, data) => {
        if (error) {
          return res.send({
            error: error,
          });
        }
        const session = await sessionModel.getSessionByUserId(data.userId);
        if (session.error || !session.response) {
          return res.send({
            error: "unauthorized error",
          });
        }
        const role = await userModel.getRoleByUserId(data.userId);
        if (role.error || !role.response) {
          return res.send({
            error: "Invalid request",
          });
        }

        if (role.response.dataValues.role.dataValues.role !== "VENDOR") {
          return res.send({
            error: "unauthorized error",
          });
        }
        next();
      });
    } catch (error) {
      return res.send({
        message: "Invalid request",
      });
    }
  },
};
