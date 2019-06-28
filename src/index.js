const { ApolloServer, gql } = require('apollo-server');

//schema describes functionally avaliable to clients
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
//resolvers key used to fetch data
//query is what happens when the query is called
const resolvers = {
  Query: {
    hello: () => 'Hello world'
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

//start server
server.listen().then(({ url }) => console.log(`server sterted ${url}`)) 
//startup = node src/index.js
