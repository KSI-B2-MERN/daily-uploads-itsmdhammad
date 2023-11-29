const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class OrderItems extends Model {}

OrderItems.init({
    ItemID: {
        primaryKey: true,
        type: DataTypes.STRING(90),
    },
    ItemName: {
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    ItemSize: {
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    ItemColor: {
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    ItemPrice:{
        type: DataTypes.STRING(34),
        allowNull: false,
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "OrderItems",
})

module.exports = OrderItems;