const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class Variations extends Model {}

Variations.init({
    Size: {
        type: DataTypes.STRING(10),
    },
    color: {  
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING(34),
        allowNull: false,
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Variations",
})

module.exports = Variations;