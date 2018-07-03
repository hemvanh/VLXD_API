import {GraphQLInt, GraphQLList} from 'graphql'
import db from '../db'
import Sequelize from 'sequelize'
import {Product, ProductInput} from './type'
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
  updateProduct: {
    type: Product,
    args: {
      input: {
        type: ProductInput,
      },
    },
    resolve(_, {input}) {
      return db.models.product.upsert(input).then(() => {
        return input
      })
    },
  },
}
