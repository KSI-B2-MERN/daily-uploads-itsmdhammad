const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class cart extends Model {}

cart.init({
    cartID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "cart",
})

module.exports = cart;