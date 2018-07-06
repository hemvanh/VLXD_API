'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _type = require('./type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  listProduct: {
    description: 'List all Products ###\n    {\n      listProduct {\n        id\n        name\n        code\n        unit\n        listingPrice\n      }\n    }',
    type: new _graphql.GraphQLList(_type.Product),
    resolve: function resolve() {
      return _db2.default.models.product.findAll();
    }
  }
};