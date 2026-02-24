import { Input } from "@/components/ui/input"
import { Link } from "react-router";

function Header() {
    return (
        <div className="bg-black w-full h-20 grid place-items-center">
            <div className="grid grid-flow-col items-center justify-between w-[1168px] h-[48px]">
                <Link to='/'><img src="https://www.g2a.com/static/assets/images/logo_g2a_white.svg"
                           width={105}
                           height={30}
                           alt='logo'
                /></Link>

                <Input className="w-[534px] " />
                <div className='w-[155px] h-[48px] grid place-items-center grid-flow-col'>
                        <div className='grid grid-flow-col gap-3 pr-10' >
                        <div className='bg-neutral-800 w-[48px] h-[48px] grid place-items-center rounded-3xl'>
                            <img className='' src="/icons/user.svg" alt="user" />
                        </div>
                        <div className=''>
                            <p className='text-white'>Sign In</p>
                            <p className='text-white'>Register</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[10px] '>
                    <div className='bg-neutral-800  w-[48px] h-[48px] grid place-items-center rounded-3xl'>
                        <img className='' src="/icons/whishlist.svg" alt="whishlist" />
                    </div>
                    <div className='bg-neutral-800 w-[48px]  h-[48px] grid place-items-center rounded-3xl'>
                        <img className='' src="/icons/cart.svg" alt="whishlist" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
