import { prisma } from '../lib/prisma.js';

export const gameResolvers = {
    Query: {
        allGames: () => {
            return prisma.game.findMany();
        },
        getGame: (_parent: any, args: { id: string }) => {
            console.log(args);
            return prisma.game.findUnique({
                where: { id: args.id },
            });
        }
    },
};