import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { prisma } from './lib/prisma';
const typeDefs = `
type Game {
    id: String
    title: String
    description: String
    price: Float
    isBestSeller: Boolean
}

type Query {
allGames: [Game]}
`;
const resolvers = {
    Query: {
        allGames: () => {
            return prisma.game.findMany();
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
});
console.log(`🚀  Server ready at: ${url}`);
