// src/entities/game/api/gameQuery.ts
import { gql } from "@apollo/client";

export const GET_GAMES = gql`
    query GetGames {
        allGames {
            id
            title
            price
            oldPrice
            discount
            isBestSeller
            imgUrl
            description
            edition
            platform
            region
            type
        }
    }
`;

export const GET_GAME_BY_ID = gql`
    query GetGame($id: String!) {
        game(id: $id) {
            id
            title
            description
            price
            imgUrl
            platform
            region
        }
    }
`;