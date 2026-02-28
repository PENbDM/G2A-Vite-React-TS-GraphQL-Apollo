import { useParams } from 'react-router'; // 1. Import useParams
import {GET_GAME_BY_ID} from '../../entities/game/api/gameQuery.ts'
import { useQuery } from "@apollo/client/react";
import type {GameData} from "@/shared/types/game.ts";
import SingleGameCard from "@/entities/game/ui/SingleGameCard.tsx";
function GamePage() {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    // Pass GameData as the generic to useQuery
    const { loading, error, data } = useQuery<GameData>(GET_GAME_BY_ID, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {/* Directly render the card.
              data.getGame is already typed as 'Game' via the interface.
            */}
            {data?.getGame && <SingleGameCard {...data.getGame} />}
        </div>
    );
}

export default GamePage;