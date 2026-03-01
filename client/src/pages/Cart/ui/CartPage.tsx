import {useCartStore} from '@/entities/cart/cart-store.ts'
const CartPage = () => {
    const cartStore = useCartStore((state) => state.products);
    console.log(...cartStore);

    return (
        <div>
            <div className='mb-10'>
                <p className='mt-5 text-2xl font-medium'>Your cart</p>
            </div>
            <div className='flex gap-10'>
                <div className='w-[70%]'>
                    <div className='flex flex-col gap-4'>
                        {cartStore.map((item) => (
                            <div className='flex py-4 p-5 gap-4 items-start border rounded-md '>
                                    <img className='w-35 h-43 object-cover rounded-md' src={item.imgUrl} alt='game'/>
                                    <p className='flex-1  font-medium text-lg w-[65%]'>{item.title}</p>
                                <div className='flex gap-4 items-center self-center w-[35%] justify-center' key={item.id}>
                                    <div className="relative">
                                        <select
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
                                    <button className='cursor-pointer hover:text-red-600'>Delete</button>
                                    <p className='font-medium text-xl'>{item.price} USD</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className='w-[30%]'>small cart</div>
            </div>
        </div>
    );
};

export default CartPage;