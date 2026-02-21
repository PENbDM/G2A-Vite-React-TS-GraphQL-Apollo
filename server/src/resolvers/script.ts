import { prisma } from '../lib/prisma'

async function main() {
    const games = [
        {
            title:'Elden Ring',
            price:59.5,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/elden-ring.avif'
        },
        {
            title:'Crusader Kings 3',
            price:15.5,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/crusaderKing3.avif'
        },
        {
            title:'Fallout 4',
            price:18,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/fallout4.avif'
        },
        {
            title:'GTA 5',
            price:21.41,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/gta5.avif'
        },
        {
            title:'Kingdom Come: Deliverance II',
            price:58,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/kcd2.avif'
        },
        {
            title:'Minecraft',
            price:12,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/minecraft.avif'
        },
        {
            title:'Rust',
            price:18,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/rust.avif'
        },
        {
            title:'WarHammer',
            price:52,
            isBestSeller:true,
            description:'Best Game',
            imgUrl:'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/warhammer.avif'
        },

    ]
    const game = await prisma.game.createMany({
        data:games,
    });
    console.log("Created game:", game);

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