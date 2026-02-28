import "dotenv/config";
import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const userResolvers = {
    Query: {
        allUsers: () => {
            return prisma.user.findMany();
        },
        getUser: (_parent, args) => {
            console.log(args);
            return prisma.user.findUnique({
                where: { id: args.id },
            });
        },
    },
    Mutation: {
        register: async (_parent, { email, password }) => {
            // check if user exist
            const existingUser = await prisma.user.findFirst({
                where: { OR: [{ email }] }
            });
            if (existingUser) {
                throw new Error("User with this email or name already exists");
            }
            //Hash pass before saving
            const hashedPassword = await bcrypt.hash(password, 10);
            // create user
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                }
            });
            //generate token JWT
            const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, { expiresIn: '7d' });
            return { token, user };
        },
        login: async (_parent, { email, password }) => {
            // find user by email
            const user = await prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                throw new Error("No user found with that email");
            }
            // compare password
            const validUser = await bcrypt.compare(password, user.password);
            if (!validUser) {
                throw new Error("Invalid password");
            }
            // generate jwt token
            const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, { expiresIn: '7d' });
            return { token, user };
        }
    },
};
