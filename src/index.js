import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Subscription from './resolvers/Subscription'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import User from './resolvers/User'
import './prisma'

// Scalar types - String, Boolean, Int, Float, ID

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
  },
  context: {
    db,
    pubsub
  }
})

server.start(() => {
  console.log('The server is up!')
})