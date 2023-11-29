const sequelize = require('../bin/dbConnection');
const USERS = require('./definitions/users');
const PRODUCT = require('./definitions/Product');
const Roles = require('./definitions/Roles');
const Order = require('./definitions/Order');
const Variations = require('./definitions/Variation');
const cart = require('./definitions/Cart');
const OrderItems = require('./definitions/OrderItems');
const CartItems = require('./definitions/CartItems');

const models = {USERS, PRODUCT, Roles, Order, Variations, cart, OrderItems, CartItems};

const db= {};

db.sequelize= sequelize;

sequelize.models = models; 

module.exports = {models, db};