'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductInput = exports.Product = undefined;

var _graphql = require('graphql');

var Product = exports.Product = new _graphql.GraphQLObjectType({
  name: 'Product',
  description: 'Product Information ...',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve: function resolve(product) {
          return product.id;
        }
      },
      code: {
        type: _graphql.GraphQLString,
        description: 'This code should be controlled by user.',
        resolve: function resolve(product) {
          return product.code;
        }
      },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(product) {
          return product.name;
        }
      },
      unit: {
        type: _graphql.GraphQLString,
        resolve: function resolve(product) {
          return product.unit;
        }
      },
      listingPrice: {
        type: _graphql.GraphQLInt,
        description: 'This is only a listing price for reference, the real selling/buying price would be different for each transaction',
        resolve: function resolve(product) {
          return product.listingPrice;
        }
      }
    };
  }
});

var ProductInput = exports.ProductInput = new _graphql.GraphQLInputObjectType({
  name: 'ProductInput',
  description: 'This is the Input for Product type',
  fields: function fields() {
    return {
      id: {
        // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
        type: _graphql.GraphQLInt
      },
      code: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      name: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      unit: {
        type: _graphql.GraphQLString
      },
      listingPrice: {
        type: _graphql.GraphQLInt
      }
    };
  }
});