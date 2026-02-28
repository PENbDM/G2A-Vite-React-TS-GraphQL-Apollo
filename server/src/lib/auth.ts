import jwt from 'jsonwebtoken'
import {prisma} from './prisma.js'

export async function authenticateUser(req: any) {
    const auth = req.headers.authorization || '';

    if (auth.startsWith('Bearer ')) {
        const token = auth.replace('Bearer ', '');
        try {
            const decoded = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
            // Return the user from the database
            return await prisma.user.findUnique({ where: { id: decoded.userId } });
        } catch (err) {
            // Token is expired or invalid
            return null;
        }
    }
    return null;
}