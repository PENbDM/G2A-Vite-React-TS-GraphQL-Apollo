import type {Game} from "@/shared/types/game.ts";
import CartSmall from "@/shared/components/cart-small/CartSmall.tsx";
const SingleGameCard = (props: Game) => {
    return (
        <div className='mt-10'>
            <div>
                <p className='text-4xl mb-5 font-semibold'>{props.title} - {props.platform} - {props.region}</p>
            </div>
            <div className='flex flex-row'>
            <div>
                <img src={props.imgUrl} alt='img'  className='w-[520px] h-[314px]'/>
                <p className='text-[24px] mt-3'>Description: {props.description}</p>
            </div>
            <div className='flex flex-col  ml-10 gap-2'>
                <div className='flex items-center'>
                    <div className='rounded-sm border border-solid border-neutral-300 p-3 mr-3'><img src='/icons/platfrom.svg' width='24px' height='24px' alt='platfrom' /></div>
                    <p className='text-center justify-center'><span className='text-neutral-600'>Platform:</span> {props.platform}</p>
                </div>
                <div className='flex items-center'>
                    <div className='rounded-sm border border-solid border-neutral-300 p-3 mr-3'><img src='/icons/region.svg' width='24px' height='24px' alt='region' /></div>
                    <p className='text-center justify-center'><span className='text-neutral-600'>Region:</span> {props.region}</p>
                </div>
                <div className='flex items-center'>
                    <div className='rounded-sm border border-solid border-neutral-300 p-3 mr-3'><img src='/icons/type.svg' width='24px' height='24px' alt='type' /></div>
                    <p className='text-center justify-center'><span className='text-neutral-600'>Type:</span> {props.platform}</p>
                </div>
                <p className='mt-1'><span className='font-bold text-[20px]'>Edition:</span> {props.edition}</p>
            </div>
                <div className='ml-10'>
                    <CartSmall price={props.price}  />
                </div>
            </div>

        </div>
    );
};

export default SingleGameCard;