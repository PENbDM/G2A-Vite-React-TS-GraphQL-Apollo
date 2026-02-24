// context.ts
export interface MyContext {
    res: Response;
    req: Request;
    prisma: PrismaClient;
    userId?: string;
}