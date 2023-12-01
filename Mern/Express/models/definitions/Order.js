const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class Order extends Model {}

Order.init({
    OrderID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Order",
})

module.exports = Order;