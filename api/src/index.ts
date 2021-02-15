//Dependencies

import { ApolloServer, makeExecutableSchema } from "apollo-server"
import models from "./models"

//Type Definitions
import typeDefs from './graphql/types/index'

// Resolvers
import resolvers from './graphql/resolvers'

//Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

const alter = true
const force = false

models.sequelize.sync({ alter, force}).then(() => {
  apolloServer.listen(5000).then(({url}) => console.log(`Running on ${url}`))
})

