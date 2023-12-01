const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class Roles extends Model {}

Roles.init({
    roleID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    Role: {
        type: DataTypes.STRING(34),
        allowNull: false,
        unique: true,
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Roles",
})

module.exports = Roles;