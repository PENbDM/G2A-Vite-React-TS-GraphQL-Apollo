import { prisma } from '../lib/prisma.js';

export const orderResolvers = {

    Mutation: {
        makeOrder: async (_parent: any, { userId, total, items }: { userId: string; total:number; items: any[] })=>{
            try{

                return await prisma.order.create({
                    data:{
                        userId,
                        total,
                        items:{
                            create: items.map(item => ({
                                gameId: item.gameId,
                                amount: item.amount,
                                price: item.price * item.amount,
                            }))
                        }
                    }
                });

            } catch (error) {
                console.error("DATABASE ERROR:", error);
                // Throwing the error prevents the "return null" crash

            }

        }
    }
}