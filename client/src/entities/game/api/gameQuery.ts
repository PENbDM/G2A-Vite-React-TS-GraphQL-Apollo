// src/entities/game/api/gameQuery.ts
import { gql } from "@apollo/client";

export const GET_GAMES = gql`
    query GetGames {
        allGames {
            id
            title
            price
            isBestSeller
        }
    }
`;