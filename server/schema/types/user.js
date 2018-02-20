const { GraphQLID, GraphQLObjectType, GraphQLString } = require('graphql');

const User = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

module.exports = User;