import { prisma } from '../lib/prisma.js';
export const gameResolvers = {
    Query: {
        allGames: () => {
            return prisma.game.findMany();
        },
        getGame: (_parent, args) => {
            console.log(args);
            return prisma.game.findUnique({
                where: { id: args.id },
            });
        }
    },
};
