const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class Roles extends Model {}

Roles.init({
    roleID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    RoleName: {
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    roleDescription: {
        type: DataTypes.STRING(250),
        allowNull: false,
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Roles",
})

module.exports = Roles;