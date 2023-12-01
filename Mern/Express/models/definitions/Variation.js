const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class Variations extends Model {}

Variations.init({
    VariationID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    quantity: {  
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Variations",
})

module.exports = Variations;