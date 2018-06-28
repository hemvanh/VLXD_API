import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'
import db from './db'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const Product = new GraphQLObjectType({
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

const query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the ROOT Query',
  fields: () => {
    return {
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
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is for create/update/delete operation',
  fields() {
    return {
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
  },
})

const SCHEMA = new GraphQLSchema({
  query,
  mutation,
})

export default SCHEMA
