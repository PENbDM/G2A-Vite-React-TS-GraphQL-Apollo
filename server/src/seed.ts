// server/src/script.ts
import { prisma } from './lib/prisma';

async function main() {
    const games = [
        {
            title: 'Elden Ring',
            price: 19.95,
            oldPrice: 35.33,
            discount: 44,
            isBestSeller: true,
            description: 'Best Game',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/elden-ring.avif',
            platform: 'Steam',    // Matched to Schema
            region: 'Global',     // Matched to Schema
            edition: 'Deluxe',    // Matched to Schema
            type: 'Key'           // Matched to Schema
        },
        {
            title: 'Crusader Kings 3',
            price: 31.74,
            oldPrice: 47.11,
            discount: 33,
            isBestSeller: true,
            description: 'Grand Strategy Game',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/crusaderKing3.avif',
            platform: 'Pc',
            region: 'Europe',
            edition: 'Standard',
            type: 'Key'
        },
        {
            title: 'Fallout 4',
            price: 12.42,
            oldPrice: 47.11,
            discount: 74,
            isBestSeller: true,
            description: 'Post-apocalyptic RPG',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/fallout4.avif',
            platform: 'Xbox',
            region: 'Usa',
            edition: 'Collection',
            type: 'Account'
        },
        {
            title: 'GTA 5',
            price: 14.12,
            oldPrice: 35.33,
            discount: 60,
            isBestSeller: true,
            description: 'Open world action',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/gta5.avif',
            platform: 'Ps5',
            region: 'Global',
            edition: 'Standard',
            type: 'Account'
        },
        {
            title: 'Kingdom Come: Deliverance II',
            price: 41.08,
            oldPrice: 82.46,
            discount: 50,
            isBestSeller: true,
            description: 'Realistic Medieval RPG',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/kcd2.avif',
            platform: 'Steam',
            region: 'Global',
            edition: 'Deluxe',
            type: 'Key'
        },
        {
            title: 'Minecraft',
            price: 10.96,
            oldPrice: 35.33,
            discount: 69,
            isBestSeller: true,
            description: 'Sandbox Building',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/minecraft.avif',
            platform: 'Pc',
            region: 'Global',
            edition: 'Standard',
            type: 'Key'
        },
        {
            title: 'Rust',
            price: 9.84,
            oldPrice: 47.11,
            discount: 79,
            isBestSeller: true,
            description: 'Survival Multiplayer',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/rust.avif',
            platform: 'Steam',
            region: 'Europe',
            edition: 'Standard',
            type: 'Key'
        },
        {
            title: 'WarHammer',
            price: 27.69,
            oldPrice: 70.68,
            discount: 61,
            isBestSeller: true,
            description: 'Fantasy Warfare',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/warhammer.avif',
            platform: 'Pc',
            region: 'Usa',
            edition: 'Collection',
            type: 'Key'
        },
    ]
    const createdGames = await prisma.game.createMany({
        data: games,
        skipDuplicates: true, // Prevents errors if you run it twice
    });

    console.log(`Successfully created ${createdGames.count} games.`);
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });