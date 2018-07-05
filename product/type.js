import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql'

export const Product = new GraphQLObjectType({
  name: 'Product',
  description: 'Product Information ...',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve(product) {
          return product.id
        },
      },
      code: {
        type: GraphQLString,
        description: 'This code should be controlled by user.',
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
        description:
          'This is only a listing price for reference, the real selling/buying price would be different for each transaction',
        resolve(product) {
          return product.listingPrice
        },
      },
    }
  },
})

export const ProductInput = new GraphQLInputObjectType({
  name: 'ProductInput',
  description: 'This is the Input for Product type',
  fields: () => ({
    id: {
      // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
      type: GraphQLInt,
    },
    code: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    unit: {
      type: GraphQLString,
    },
    listingPrice: {
      type: GraphQLInt,
    },
  }),
})
