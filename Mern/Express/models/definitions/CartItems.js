const sequelize = require("../../bin/dbConnection");
const {Model, DataTypes} = require("sequelize");

class CartItems extends Model {}

CartItems.init({
    ItemsID: {
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
    Price: {
        type: DataTypes.STRING(34),
        allowNull: false,
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "CartItems",
})

module.exports = CartItems;