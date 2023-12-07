const sequelize = require('../bin/dbConnection');
const USERS = require('./definitions/users');
const PRODUCT = require('./definitions/Product');
const ROLES = require('./definitions/Roles');
const ORDER = require('./definitions/Order');
const VARIATION = require('./definitions/Variation');
const CART = require('./definitions/Cart');
const ORDERITEM = require('./definitions/OrderItems');
const CARTITEM = require('./definitions/CartItems');
const SESSION = require('./definitions/session');

const models = {
    USERS,
    PRODUCT,
    ROLES,
    ORDER,
    VARIATION,
    CART,
    ORDERITEM,
    CARTITEM,
    SESSION
};

//! Relations
//! 1:1 Relations 
// User-Cart: 1:1

USERS.hasOne(CART, {foreignKey: "userID"})
CART.belongsTo(USERS, {foreignKey: "userID"})

//! 1:1 Relations 
// User-SESSION:

USERS.hasOne(SESSION, { foreignKey: "userId" });
SESSION.belongsTo(USERS, { foreignKey: "userId" });

//! Relations
//! 1:M Relations 
// User-Roles:

ROLES.hasMany(USERS, {foreignKey: "roleID"});
USERS.belongsTo(ROLES, {foreignKey: "roleID"});

// user-order:
USERS.hasMany(ORDER, {foreignKey: "OrderID"});
ORDER.belongsTo(USERS, {foreignKey: "OrderID"});

// user-product 
USERS.hasMany(PRODUCT, {foreignKey: "ProductID"});
PRODUCT.belongsTo(USERS, {foreignKey: "ProductID"});

// product-variations
PRODUCT.hasMany(VARIATION, {foreignKey: "VariationID"});
VARIATION.belongsTo(PRODUCT, {foreignKey: "VariationID"});

//variations-cartItems && Cart-cartItems (Variations-CartItems-Cart: M:M)
VARIATION.hasMany(CARTITEM, {foreignKey: "VariationID"});
CARTITEM.belongsTo(VARIATION, {foreignKey: "VariationID"});
//
CART.hasMany(CARTITEM, {foreignKey: "CartID"});
CARTITEM.belongsTo(CART, {foreignKey: "CartID"});

//Variations-OrderItems && Order-OrderItems (Variations-OrderItems-Order: M:M)
VARIATION.hasMany(ORDERITEM, {foreignKey: "VariationID"});
ORDERITEM.belongsTo(VARIATION, {foreignKey: "VariationID"});
//
ORDER.hasMany(ORDERITEM, {foreignKey: "OrderID"});
ORDERITEM.belongsTo(ORDER, {foreignKey: "OrderID"});


//! Relations End Here.

const db= {};

db.sequelize= sequelize;

sequelize.models = models; 

module.exports = {models, db};