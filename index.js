const express = require('express');
// const { ApolloServer } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { feeds } = require('./dummyData');

const FeedType = new GraphQLObjectType({
  name: 'Feeds',
  fields: () => ({
    todays_featured_article: { type: new GraphQLList(GraphQLString) },
    most_read: { type: new GraphQLList(GraphQLString) },
    picture_of_the_day: { type: new GraphQLList(GraphQLString) },
    in_the_news: { type: new GraphQLList(GraphQLString) },
    on_this_day: { type: new GraphQLList(GraphQLString) },
  }),
});
const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    feedAvailability: {
      type: FeedType,
      // args: { id: { type: GraphQLString } },
      resolve: () => feeds,
    },
  },
});

const schema = new GraphQLSchema({ query });

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const app = express();

app.get('/home', (req, res, next) => {
  res.json('This is Home Page');
});

// One way
const server = new ApolloServer({ resolvers, typeDefs });
// Second way using graphQL
// const server = new ApolloServer({ schema });
server.start().then((res) => {
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen(4000, () => console.log('Server is listening on port 3000'));
});
