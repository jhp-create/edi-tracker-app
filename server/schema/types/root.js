const { GraphQLObjectType, GraphQLID } = require('graphql');
const User = require('./user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: User,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQuery;