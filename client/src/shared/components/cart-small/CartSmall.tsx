import type { CartSmallType} from "@/shared/types/cart.ts";

function CartSmall({ price }: CartSmallType) {
    return (
        <div className='w-[302px]  rounded-sm border border-solid border-neutral-300 p-4'>
            <div className='mb-3'>
                <p className='text-3xl'><span className='font-medium'>{price}</span> USD</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='w-full bg-[#0868F3] h-[42px] text-white font-medium'>Add to cart</button>
                <button className='w-full bg-orange-400 h-[42px] font-medium'>PayPal Buy Now</button>
            </div>
        </div>
    )
}

export default CartSmall;