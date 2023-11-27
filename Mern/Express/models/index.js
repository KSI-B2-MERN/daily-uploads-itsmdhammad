const sequelize = require('../bin/dbConnection');
const USERS = require('./definitions/users');

const models = {USERS};

const db= {};

db.sequelize= sequelize;

sequelize.models = models; 

module.exports = {models, db};