import {GraphQLInt, GraphQLList} from 'graphql'
import db from '../db'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

export default {
  deleteProduct: {
    type: GraphQLInt,
    args: {
      input: {
        type: new GraphQLList(GraphQLInt),
      },
    },
    resolve(_, {input}) {
      return db.models.product.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
      })
    },
  },
}
