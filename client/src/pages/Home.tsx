import {GameCard} from "@/entities/game/ui/GameCard.tsx";

function Home() {
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
            <div className="py-10">
                <h2 className="text-3xl font-bold">Bestsellers</h2>
                <GameCard title='resedent Eveil' description='nice game,coming 2026' />
            </div>
        </div>
    );
}

export default Home;