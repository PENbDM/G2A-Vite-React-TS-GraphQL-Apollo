import type { CartSmallType} from "@/shared/types/cart.ts";
import {useCartStore} from '@/entities/cart/api/cart-store.ts'
import {useAuthStore} from "@/entities/user/model/auth-store.ts";
import AuthModal from "@/shared/components/modal/AuthModal.tsx";
import React from 'react'
function CartSmall({ ...props }: CartSmallType) {
    const { isAuthenticated, user } = useAuthStore();
    const userId = user?.id;
    const addProduct = useCartStore((state) => state.addProduct);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleAddProduct = () => {
        if(userId){
            addProduct({
                user_id:userId,
                id:props.id,
                title: props.title,
                price: props.price,
                imgUrl:props.imgUrl,
            })
        }
    }
    const handleClickAuthCheck = () =>{
        if(!isAuthenticated){
            setModalOpen(true);        }
    }

    return (
        <>
        <div className='w-75.5  rounded-sm border border-solid border-neutral-300 p-4'>
            <div className='mb-3'>
                <p className='text-3xl'><span className='font-medium'>{props.price}</span> USD</p>
            </div>
            <div className='flex flex-col gap-10'>
                {isAuthenticated ? (
                    <button onClick={handleAddProduct} className='cursor-pointer w-full bg-[#0868F3] h-10.5 text-white font-medium'>Add to cart</button>
                ) :
                    <button onClick={handleClickAuthCheck} className='cursor-pointer w-full bg-[#0868F3] h-10.5 text-white font-medium'>Add to cart</button>
                }
                <button className='cursor-pointer w-full bg-orange-400 h-10.5 font-medium'>PayPal Buy Now</button>
            </div>
        </div>
            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default CartSmall;