const config = require("../config.json");
const {Sequelize}= require("sequelize");

const database = new Sequelize(config.db);

database
.authenticate()
.then(()=>{
    console.log("Database connected");
})
.catch((error)=>{
    console.log("Database Error", error);
});

module.exports = database;