export interface Game {
    id: string; // Add id so you can use it in the .map() key
    title: string;
    description: string;
    price: number;
    oldPrice:number;
    discount:number;
    isBestSeller: boolean;
    imgUrl: string;
    edition: string;
    platform: string;
    region: string;
    type: string;
}

// Add this interface to fix the Home.tsx error
export interface GamesData {
    allGames: Game[];
}
// In your types file
export interface GameData {
    getGame: Game; // Matches the JSON key "getGame"
}