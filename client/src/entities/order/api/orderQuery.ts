// src/entities/game/api/gameQuery.ts
import { gql } from "@apollo/client";

export const MAKE_ORDER = gql`
    mutation MakeOrder($userId: String!,$total:Float!,$items:[OrderItemInput!]!) {
        makeOrder(userId:$userId,total:$total,items:$items) {
            id
            total
            status
        }
    }
`;

