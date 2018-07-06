'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Op = _sequelize2.default.Op;

var Conn = new _sequelize2.default('heroku_c53a18f60a793d9', 'b8558b412c7ee2', 'bf3ad615', {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  dialect: 'mysql',
  operatorsAliases: Op,
  pool: {
    port: 3306,
    max: 5,
    min: 1,
    accquire: 60000,
    idle: 20000
  }
});
// eslint-disable-next-line no-unused-vars
var Product = Conn.define('product', {
  code: { type: _sequelize2.default.STRING, allowNull: false },
  name: { type: _sequelize2.default.STRING, allowNull: false },
  unit: { type: _sequelize2.default.STRING, allowNull: true },
  listingPrice: { type: _sequelize2.default.INTEGER, allowNull: true }
});

// Generating demo Data
// import _d from 'lodash'
// import Faker from 'faker'
// Conn.sync({force: true}).then(() => {
//   console.log('DB Structure created ...')
//   _d.times(100, () => {
//     return Product.create({
//       code: Faker.address.countryCode(),
//       name: Faker.commerce.productName(),
//       unit: Faker.commerce.productMaterial(),
//       listingPrice: Faker.commerce.price(),
//     })
//   })
// })

Conn.authenticate();
exports.default = Conn;