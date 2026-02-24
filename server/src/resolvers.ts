import { gameResolvers } from "./resolvers/game";

// Use the spread operator (...) to pull Query/Mutation out of gameResolvers
const resolvers = {
    ...gameResolvers
};

export default resolvers;