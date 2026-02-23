import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type {Game} from "@/shared/types/game.ts";


export function GameCard({onClick,...props}:Game & {onClick?:(id:string) => void}) {
    return (
        <Card onClick={()=>onClick?.(props.id)} className="relative mx-auto w-full max-w-sm pt-0 transition-transform duration-300 hover:scale-105 cursor-pointer rounded-2xl overflow-hidden border-none shadow-sm">            <div className="absolute inset-0 z-30 aspect-video " />
            <img
                src={props.imgUrl}
                alt="Event cover"
                className="relative z-20 w-full h-full object-cover"
            />
            <CardHeader>
                <CardTitle  className='text-lg font-bold leading-tight line-clamp-2 min-h-[3.5rem]'>
                    {props.title}
                </CardTitle>                <CardDescription className="text-sm font-medium text-gray-500 uppercase flex items-center gap-1">
                    {props.platform} • {props.type}
                </CardDescription>
                <CardDescription className="text-sm font-bold text-green-600 uppercase">
                    {props.region}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className='font-bold pr-1 text-[18px]'>{props.price}</p>
                        <span className='text-[18px]'>USD</span>
                        <div className="ml-3 bg-[#ff4500] text-white font-bold text-[12px] px-1.5 py-0.5 rounded-[3px] flex items-center justify-center">
                            -{props.discount}%
                        </div>
                    </div>
                    <div className="flex items-center text-foreground-subtitle line-through">
                        <p className='mr-1'>{props.oldPrice}</p>
                        <span>USD</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
