const { graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { json } = require('body-parser')

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

module.exports = [ json(), graphqlExpress({ schema: SCHEMA }) ]
