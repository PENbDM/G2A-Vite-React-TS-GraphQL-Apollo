import {useCartStore} from '@/entities/cart/api/cart-store.ts'
import { Link } from "react-router";
import {MAKE_ORDER} from "@/entities/order/api/orderQuery.ts";
import {useMutation} from "@apollo/client/react";
const CartPage = () => {
    const [mutate,{data,loading,error}] = useMutation(MAKE_ORDER)
    const cartStore = useCartStore((state) => state.products);
    const userId = cartStore.length > 0 ? cartStore[0].user_id : null;
    const removeProduct = useCartStore((state)=>state.removeProduct)
    const updateAmount = useCartStore((state) => state.updateAmount);

    const handleDeleteProduct = (id:string)=> {
        removeProduct(id)
    }
    const total = cartStore.reduce((acc, item) => {
        return acc + item.price * item.amount;
    }, 0);


    const handleCheckOut = async () => {
        try {
            const response = await fetch("http://localhost:5000/checkout-session", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
            })
            const {url} = await response.json()
            window.location.href = url;
        } catch (error) {
            console.log(error)
        }

    }

    const handleOrder = async () => {
        try {
            const result = await mutate({
                variables: {
                    userId: userId,
                    total:total,
                    items: cartStore.map((item) => ({
                        gameId: item.id,
                        amount: item.amount,
                        price:item.price
                    })),
                },
            });

            if (result.data) {
                alert("Order Successful!");
            }
        } catch (err) {
            console.error("Mutation failed:", err);
        }
    };

    return (
        <div>
            {cartStore.length !== 0 ? (
                <>
                        <div className='mb-10'>
                            <p className='mt-5 text-2xl font-medium'>Your cart</p>
                        </div>
                    <div className='flex gap-10'>
                        <div className='w-[70%]'>
                            <div className='flex flex-col gap-4'>
                                {cartStore.map((item) => (
                                    <div key={item.id} className='flex py-4 p-5 gap-4 items-start border rounded-md '>
                                        <img className='w-35 h-43 object-cover rounded-md' src={item.imgUrl} alt='game'/>
                                        <p className='flex-1  font-medium text-lg w-[65%]'>{item.title}</p>
                                        <div className='flex gap-4 items-center self-center w-[35%] justify-center' key={item.id}>
                                            <div className="relative">
                                                <select
                                                    onChange={(e)=>updateAmount(item.id,Number(e.target.value))}
                                                    className='appearance-none border border-gray-300 rounded-md pl-3 pr-8 py-1 h-9 text-sm bg-white cursor-pointer hover:border-blue-400 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 custom-select-scroll'
                                                    defaultValue={item.amount}
                                                >
                                                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                                        <option key={num} value={num} className="py-2">
                                                            {num}
                                                        </option>
                                                    ))}
                                                </select>
                                                {/* Custom Chevron Arrow */}
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                </svg>
                                            </div>
                                            <button onClick={()=>handleDeleteProduct(item.id)}  className='cursor-pointer text-white bg-[#0868F3] rounded-md w-17 h-8'  >Delete</button>
                                            <p className='font-medium text-xl'>{item.price} USD</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className='w-[30%]'>

                            <div className='border rounded-md p-4 flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <p className='font-medium text-lg'>Cart total</p>
                                    <p className='font-medium text-lg'>{total} USD</p>
                                </div>
                                <button onClick={handleCheckOut}
                                        className='bg-[#0868f3] text-white h-10'>Continue to payment</button>
                            </div>
                        </div>
                    </div>
                </>
                ) : (
                    <div className='flex justify-center flex-col items-center mt-10 gap-5'>
                        <img className='w-24 h-21' src='/icons/emptycart.svg' alt='empty-cart'/>
                        <p className='font-medium text-lg'>Your cart is empty. Go ahead and add some cool stuff to it!</p>
                        <Link to='/'>
                            <button className='w-35 h-10 cursor-pointer text-white bg-[#0868F3] rounded-md'>Browse deals</button>
                        </Link>
                    </div>
                )
            }

        </div>
    );
};

export default CartPage;