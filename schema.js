import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'
import db from './db'

const Product = new GraphQLObjectType({
  name: 'Product',
  description: 'Product Information ...',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(product) {
          return product.id
        },
      },
      code: {
        type: GraphQLString,
        resolve(product) {
          return product.code
        },
      },
      name: {
        type: GraphQLString,
        resolve(product) {
          return product.name
        },
      },
      unit: {
        type: GraphQLString,
        resolve(product) {
          return product.unit
        },
      },
      listingPrice: {
        type: GraphQLInt,
        resolve(product) {
          return product.listingPrice
        },
      },
    }
  },
})

const query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the ROOT Query',
  fields: () => {
    return {
      listProduct: {
        description: 'List all Products ...',
        type: new GraphQLList(Product),
        resolve() {
          return db.models.product.findAll()
        },
      },
    }
  },
})

const SCHEMA = new GraphQLSchema({
  query,
})

export default SCHEMA
