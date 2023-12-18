const authModel = require("../models/loginModel");
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const sessionModel = require("../models/sessionModel");
const {v4: uuidV4} = require("uuid");



module.exports = {
  login: async (body) => {
    try {
      const loginResponse = await userModel.getUserByEmail(body.email);
      console.log(loginResponse);
      
      // console.log("Login Response:", loginResponse.response.dataValues.userID);
      if (loginResponse.error || !loginResponse.response) {
        return {
          error: "Login Response invalid crediantials",
        };
      }

      const login = await bcrypt.compare(
        body.password,
        loginResponse.response.dataValues.password
      );
      console.log("Login:", login);

      if (!login) {
        return {
          error: "Login 2 invalid credentails",
        };
      }

      delete loginResponse.response.dataValues.password;
      const token = jwt.sign(
        loginResponse.response.dataValues,
        config.jwt.secret,
        {
          expiresIn: "1h",
        }
      );

      const session = await sessionModel.getSessionByUserId(
        loginResponse.response.dataValues.userID
      );

      if(session.error){
        return {
          error: "Session Model invalid Crediantials",
        }
      }
      
           if (session) {
        await sessionModel.deleteSession(
          loginResponse.response.dataValues.userId
        );
      }


      const sessionId = uuidV4();
      const createdSession = await sessionModel.createSession(
        token,
        loginResponse.response.dataValues.userId,
        sessionId
      );
      console.log("Created Session",createdSession);

      if (!createdSession.response || createdSession.error) {
        return {
          error: "unable to login",
        };
      }
      return {
        response: createdSession.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
