import {GameCard} from "@/entities/game/ui/GameCard.tsx";
import { useQuery } from "@apollo/client/react";
import {GET_GAMES} from "@/entities/game/api/gameQuery.ts";
import type {GamesData} from "@/shared/types/game.ts";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (id: string) => {
        console.log("Navigating to:", id);
        // This dynamically sends the user to the specific game route
        navigate(`/games/${id}`);
    };

    const {loading,error,data} = useQuery<GamesData>(GET_GAMES);
    if(loading) return  <p>Loading...</p>
    if(error) return  <p>Error...</p>
    return (
        <div className="h-full">
            {/* 1. THE IMAGE CONTAINER */}
            {/* overflow-hidden prevents the 3500px image from causing a horizontal scrollbar */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden h-[700px]">
                <div className="relative left-1/2 -translate-x-1/2 w-[3500px] h-full">
                    <img
                        src="/img/bg-img.avif"
                        alt="Main Background"
                        className="object-cover object-top"
                    />
                </div>
            </div>

            {/* 2. THE CONTENT SECTION */}
            {/* This naturally sits below the image because the image is not absolute */}
            <h2 className="text-3xl font-bold flex justify-center items-center pt-10 pb-10">Bestsellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
                    {data?.allGames.map((game) => (
                        <GameCard  onClick={handleNavigation} key={game.id} {...game} />
                    ))}
            </div>
        </div>
    );
}

export default Home;