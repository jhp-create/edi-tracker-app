const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const RootQuery = require('./types/root');

module.exports = new GraphQLSchema({
  query: RootQuery
});