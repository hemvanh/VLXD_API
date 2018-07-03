import Sequelize from 'sequelize'

const Op = Sequelize.Op

const Conn = new Sequelize('heroku_c53a18f60a793d9', 'b8558b412c7ee2', 'bf3ad615', {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  dialect: 'mysql',
  operatorsAliases: Op,
  pool: {
    port: 3306,
    max: 5,
    min: 1,
    accquire: 60000,
    idle: 20000,
  },
})
// eslint-disable-next-line no-unused-vars
const Product = Conn.define('product', {
  code: {type: Sequelize.STRING, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false},
  unit: {type: Sequelize.STRING, allowNull: true},
  listingPrice: {type: Sequelize.INTEGER, allowNull: true},
})

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

Conn.authenticate()
export default Conn
