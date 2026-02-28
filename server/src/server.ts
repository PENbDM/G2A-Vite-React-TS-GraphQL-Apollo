import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typeDefs.js'
import resolvers from './resolvers/index.js'
import {User} from "../generated/prisma/client";
import {authenticateUser} from "./lib/auth.js";

interface MyContext {
    user: User,
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
        // Use your separated logic here
        const user = await authenticateUser(req);

        // Return the context object used by all resolvers
        return {
            user,
        };
    },
    listen: { port: 5000 },
});

console.log(`🚀 Server ready at: ${url}`);