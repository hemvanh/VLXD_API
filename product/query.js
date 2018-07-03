import {GraphQLList} from 'graphql'
import db from '../db'
import {Product} from './type'

export default {
  listProduct: {
    description: `List all Products ###
    {
      listProduct {
        id
        name
        code
        unit
        listingPrice
      }
    }`,
    type: new GraphQLList(Product),
    resolve() {
      return db.models.product.findAll()
    },
  },
}
