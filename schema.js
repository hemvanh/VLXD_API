import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import qryProduct from './product/query'
import mutProduct from './product/mutation'

const query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the ROOT Query',
  fields: () => {
    return {
      ...qryProduct,
    }
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is for create/update/delete operation',
  fields() {
    return {
      ...mutProduct,
    }
  },
})

const SCHEMA = new GraphQLSchema({
  query,
  mutation,
})

export default SCHEMA
