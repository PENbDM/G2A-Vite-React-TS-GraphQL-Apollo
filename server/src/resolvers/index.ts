import { gameResolvers } from './game.js'
import { userResolvers } from './user.js'

const resolvers = {
    // Flatten the objects using the spread operator (...)
    Query: {
        ...gameResolvers.Query,
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
    },
};

export default resolvers;