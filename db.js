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

const Sanpham = Conn.define(
  'sanpham',
  {
    ma: {type: Sequelize.STRING, allowNull: false},
    ten: {type: Sequelize.STRING, allowNull: false},
    donvi: {type: Sequelize.STRING, allowNull: true},
    gianiemyet: {type: Sequelize.INTEGER, allowNull: true},
  },
  {
    freezeTableName: true,
  }
)

import _ from 'lodash'
import Faker from 'faker'

Conn.sync({force: true}).then(() => {
  console.log('DB Structure created ...')
  _.times(10, () => {
    return Sanpham.create({
      ma: Faker.address.countryCode(),
      ten: Faker.commerce.productName(),
      donvi: Faker.commerce.productMaterial(),
      gianiemyet: Faker.commerce.price(),
    })
  })
})

export default Conn
