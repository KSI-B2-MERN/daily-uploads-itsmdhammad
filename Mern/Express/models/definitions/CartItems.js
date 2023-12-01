const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class CartItems extends Model {}

CartItems.init({
    cartItemsID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    cartItemQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "CartItems",
})

module.exports = CartItems;