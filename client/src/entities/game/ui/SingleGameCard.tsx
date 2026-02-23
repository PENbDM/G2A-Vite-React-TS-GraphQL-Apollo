import type {Game} from "@/shared/types/game.ts";

const SingleGameCard = (props: Game) => {
    console.log(props);
    return (
        <div className='flex mt-10'>
            <div>
                <p className='text-4xl mb-3 font-semibold'>{props.title} - {props.platform} - {props.region}</p>
                <img src={props.imgUrl}  className='w-[520px] h-[314px]'/>
                <p>{props.description}</p>
            </div>
            <div>
                <div>
                    <img src='/icons/platfrom.svg'/>
                </div>
                <p>Platform: {props.platform}</p>
                <p>Region: {props.region}</p>
                <p>Type: {props.type}</p>
                <p>Edition: {props.edition}</p>
            </div>
        </div>
    );
};

export default SingleGameCard;