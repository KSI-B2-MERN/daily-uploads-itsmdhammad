const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class PRODUCT extends Model {}

PRODUCT.init({
    productId: {
        primaryKey: true,
        type: DataTypes.INTEGER(),
    },
    ProductName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "PRODUCT",
})

module.exports = PRODUCT;