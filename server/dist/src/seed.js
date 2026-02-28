// server/src/script.ts
import { prisma } from './lib/prisma';
import { Platform, Region, Edition, GameType } from "../generated/prisma/enums";
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
            platform: Platform.Steam,
            region: Region.Global,
            edition: Edition.Deluxe,
            type: GameType.Key
        },
        {
            title: 'Crusader Kings 3',
            price: 31.74,
            oldPrice: 47.11,
            discount: 33,
            isBestSeller: true,
            description: 'Grand Strategy Game',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/crusaderKing3.avif',
            platform: Platform.Pc,
            region: Region.Europe,
            edition: Edition.Standard,
            type: GameType.Key
        },
        {
            title: 'Fallout 4',
            price: 12.42,
            oldPrice: 47.11,
            discount: 74,
            isBestSeller: true,
            description: 'Post-apocalyptic RPG',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/fallout4.avif',
            platform: Platform.Xbox,
            region: Region.Usa,
            edition: Edition.Collection,
            type: GameType.Account
        },
        {
            title: 'GTA 5',
            price: 14.12,
            oldPrice: 35.33,
            discount: 60,
            isBestSeller: true,
            description: 'Open world action',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/gta5.avif',
            platform: Platform.Ps5,
            region: Region.Global,
            edition: Edition.Standard,
            type: GameType.Account
        },
        {
            title: 'Kingdom Come: Deliverance II',
            price: 41.08,
            oldPrice: 82.46,
            discount: 50,
            isBestSeller: true,
            description: 'Realistic Medieval RPG',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/kcd2.avif',
            platform: Platform.Steam,
            region: Region.Global,
            edition: Edition.Deluxe,
            type: GameType.Key
        },
        {
            title: 'Minecraft',
            price: 10.96,
            oldPrice: 35.33,
            discount: 69,
            isBestSeller: true,
            description: 'Sandbox Building',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/minecraft.avif',
            platform: Platform.Pc,
            region: Region.Global,
            edition: Edition.Standard,
            type: GameType.Key
        },
        {
            title: 'Rust',
            price: 9.84,
            oldPrice: 47.11,
            discount: 79,
            isBestSeller: true,
            description: 'Survival Multiplayer',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/rust.avif',
            platform: Platform.Steam,
            region: Region.Europe,
            edition: Edition.Standard,
            type: GameType.Key
        },
        {
            title: 'WarHammer',
            price: 27.69,
            oldPrice: 70.68,
            discount: 61,
            isBestSeller: true,
            description: 'Fantasy Warfare',
            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/warhammer.avif',
            platform: Platform.Pc,
            region: Region.Usa,
            edition: Edition.Collection,
            type: GameType.Key
        },
    ];
    const createdGames = await prisma.game.createMany({
        data: games,
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
