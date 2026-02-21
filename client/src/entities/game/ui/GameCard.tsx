import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface CardImageProps{
    title:string,
    description:string,
    price:number,
    isBestSeller:boolean,
    imgUrl:string,
}

export function GameCard({...props}:CardImageProps) {
    console.log(props.imgUrl)
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
                src={props.imgUrl}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">Featured</Badge>
                </CardAction>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>
                    {props.description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}
