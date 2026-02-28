"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/src/script.ts
var prisma_1 = require("./lib/prisma");
var enums_1 = require("../generated/prisma/enums");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var games, createdGames;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    games = [
                        {
                            title: 'Elden Ring',
                            price: 19.95,
                            oldPrice: 35.33,
                            discount: 44,
                            isBestSeller: true,
                            description: 'Best Game',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/elden-ring.avif',
                            platform: enums_1.Platform.Steam,
                            region: enums_1.Region.Global,
                            edition: enums_1.Edition.Deluxe,
                            type: enums_1.GameType.Key
                        },
                        {
                            title: 'Crusader Kings 3',
                            price: 31.74,
                            oldPrice: 47.11,
                            discount: 33,
                            isBestSeller: true,
                            description: 'Grand Strategy Game',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/crusaderKing3.avif',
                            platform: enums_1.Platform.Pc,
                            region: enums_1.Region.Europe,
                            edition: enums_1.Edition.Standard,
                            type: enums_1.GameType.Key
                        },
                        {
                            title: 'Fallout 4',
                            price: 12.42,
                            oldPrice: 47.11,
                            discount: 74,
                            isBestSeller: true,
                            description: 'Post-apocalyptic RPG',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/fallout4.avif',
                            platform: enums_1.Platform.Xbox,
                            region: enums_1.Region.Usa,
                            edition: enums_1.Edition.Collection,
                            type: enums_1.GameType.Account
                        },
                        {
                            title: 'GTA 5',
                            price: 14.12,
                            oldPrice: 35.33,
                            discount: 60,
                            isBestSeller: true,
                            description: 'Open world action',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/gta5.avif',
                            platform: enums_1.Platform.Ps5,
                            region: enums_1.Region.Global,
                            edition: enums_1.Edition.Standard,
                            type: enums_1.GameType.Account
                        },
                        {
                            title: 'Kingdom Come: Deliverance II',
                            price: 41.08,
                            oldPrice: 82.46,
                            discount: 50,
                            isBestSeller: true,
                            description: 'Realistic Medieval RPG',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/kcd2.avif',
                            platform: enums_1.Platform.Steam,
                            region: enums_1.Region.Global,
                            edition: enums_1.Edition.Deluxe,
                            type: enums_1.GameType.Key
                        },
                        {
                            title: 'Minecraft',
                            price: 10.96,
                            oldPrice: 35.33,
                            discount: 69,
                            isBestSeller: true,
                            description: 'Sandbox Building',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/minecraft.avif',
                            platform: enums_1.Platform.Pc,
                            region: enums_1.Region.Global,
                            edition: enums_1.Edition.Standard,
                            type: enums_1.GameType.Key
                        },
                        {
                            title: 'Rust',
                            price: 9.84,
                            oldPrice: 47.11,
                            discount: 79,
                            isBestSeller: true,
                            description: 'Survival Multiplayer',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/rust.avif',
                            platform: enums_1.Platform.Steam,
                            region: enums_1.Region.Europe,
                            edition: enums_1.Edition.Standard,
                            type: enums_1.GameType.Key
                        },
                        {
                            title: 'WarHammer',
                            price: 27.69,
                            oldPrice: 70.68,
                            discount: 61,
                            isBestSeller: true,
                            description: 'Fantasy Warfare',
                            imgUrl: 'https://gaming-shop-img.s3.eu-north-1.amazonaws.com/gaming-shop-img/warhammer.avif',
                            platform: enums_1.Platform.Pc,
                            region: enums_1.Region.Usa,
                            edition: enums_1.Edition.Collection,
                            type: enums_1.GameType.Key
                        },
                    ];
                    return [4 /*yield*/, prisma_1.prisma.game.createMany({
                            data: games,
                        })];
                case 1:
                    createdGames = _a.sent();
                    console.log("Successfully created ".concat(createdGames.count, " games."));
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, prisma_1.prisma.$disconnect()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
