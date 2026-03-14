import { gameResolvers } from './game.js';
import { userResolvers } from './user.js';
import { orderResolvers } from "./order.js";
const resolvers = {
    // Flatten the objects using the spread operator (...)
    Query: {
        ...gameResolvers.Query,
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...orderResolvers.Mutation,
    },
};
export default resolvers;
