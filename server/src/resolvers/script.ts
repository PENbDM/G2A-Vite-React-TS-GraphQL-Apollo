import { prisma } from '../lib/prisma'

async function main() {
    // Create a new user with a post
    const game = await prisma.game.create({
        data: {
            title: "Resident evil",
            description: "Best game ever",
            price:59.5,
            isBestSeller:true
        },

    });
    console.log("Created user:", game);

    // Fetch all users with their posts
    const allGames = await prisma.game.findMany({
    });
    console.log("All users:", JSON.stringify(allGames, null, 2));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });