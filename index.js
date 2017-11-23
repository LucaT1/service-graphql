const { graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    hello: String
  } 
`

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return 'Hello world!'
    }
  }
}

const SCHEMA = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})

module.exports = graphqlExpress({ schema: SCHEMA })
