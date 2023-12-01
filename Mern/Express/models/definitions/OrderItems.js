const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class OrderItems extends Model {}

OrderItems.init({
    OrderItemID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    OrderItemQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    OrderItemPrice:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "OrderItems",
})

module.exports = OrderItems;