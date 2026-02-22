import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {prisma} from './lib/prisma'

const typeDefs = `
type Game {
    id: String
    title: String
    description: String
    price: Float
    oldPrice: Float
    discount: Int
    isBestSeller: Boolean
    imgUrl:String
    edition:String
    platform: String
    region: String
    type: String
}

type Query {
allGames: [Game]
game(id: String!): Game
}
`
const resolvers = {
    Query: {
        allGames: () => {
            return  prisma.game.findMany();
        },
        getGame: (_parent, args) => {
            return prisma.game.findUnique({
                where:{id:args.id},
            });
        }
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