'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _query = require('./product/query');

var _query2 = _interopRequireDefault(_query);

var _mutation = require('./product/mutation');

var _mutation2 = _interopRequireDefault(_mutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = new _graphql.GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the ROOT Query',
  fields: function fields() {
    return _extends({}, _query2.default);
  }
});

var mutation = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  description: 'This is for create/update/delete operation',
  fields: function fields() {
    return _extends({}, _mutation2.default);
  }
});

var SCHEMA = new _graphql.GraphQLSchema({
  query: query,
  mutation: mutation
});

exports.default = SCHEMA;