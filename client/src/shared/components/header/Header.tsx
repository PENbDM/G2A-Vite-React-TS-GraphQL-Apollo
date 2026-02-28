import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/entities/user/model/auth-store.ts";

function Header() {
    const { user, isAuthenticated, logout } = useAuthStore();
    const [isModalOpen, setModalOpen] = useState(false);

    // Ref to track the modal container for "click outside" logic
    const modalRef = useRef<HTMLDivElement>(null);

    // Toggle function
    const toggleModal = () => setModalOpen((prev) => !prev);

    // Effect to handle clicking outside the modal
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="bg-black w-full h-20 grid place-items-center">
            <div className="flex items-center justify-between w-[1168px] h-[48px]">
                {/* Logo */}
                <Link to='/'>
                    <img
                        src="https://www.g2a.com/static/assets/images/logo_g2a_white.svg"
                        width={105}
                        height={30}
                        alt='logo'
                    />
                </Link>

                {/* Search Bar */}
                <Input className="w-[534px] bg-white text-black" placeholder="Search for games..." />

                {/* User Section */}
                <div className='relative' ref={modalRef}>
                    <div className='flex items-center gap-3 pr-10 cursor-pointer' onClick={toggleModal}>
                        <div className='bg-neutral-800 w-[48px] h-[48px] grid place-items-center rounded-3xl hover:bg-neutral-700 transition-colors'>
                            <img src="/icons/user.svg" alt="user" />
                        </div>
                        <div className='select-none'>
                            <p className='text-white font-bold text-sm'>
                                {isAuthenticated ? 'Your G2A' : 'Sign In'}
                            </p>
                            <p className='text-neutral-400 text-xs'>
                                {isAuthenticated ? (user?.email.split('@')[0]) : 'Register'}
                            </p>
                        </div>
                    </div>

                    {/* Modal Dropdown */}
                    {isModalOpen && (
                        <div className="absolute top-[60px] right-8 w-[220px] bg-white rounded-md shadow-2xl z-50 flex flex-col py-2 border border-neutral-200 animate-in fade-in zoom-in duration-150">
                            {!isAuthenticated ? (
                                <>
                                    <div className="px-4 py-2 border-b border-neutral-100 mb-2">
                                        <p className="text-xs text-neutral-500 uppercase font-bold">Welcome to G2A</p>
                                    </div>
                                    <Link to='/login' className="px-4 py-2 hover:bg-neutral-100 text-sm font-medium text-black">Sign In</Link>
                                    <Link to='/register' className="px-4 py-2 hover:bg-neutral-100 text-sm font-medium text-blue-600">Create an account</Link>
                                </>
                            ) : (
                                <>
                                    <div className="px-4 py-2 border-b border-neutral-100 mb-1">
                                        <p className="text-[10px] text-neutral-400 uppercase font-bold">Logged in as</p>
                                        <p className="text-xs font-bold text-black truncate">{user?.email}</p>
                                    </div>
                                    <Link to='/dashboard' className="px-4 py-2 hover:bg-neutral-100 text-sm text-neutral-700">My Dashboard</Link>
                                    <Link to='/wishlist' className="px-4 py-2 hover:bg-neutral-100 text-sm text-neutral-700">Wishlist</Link>
                                    <button
                                        onClick={() => { logout(); setModalOpen(false); }}
                                        className="mt-2 px-4 py-3 border-t border-neutral-100 text-left text-sm font-bold text-red-500 hover:bg-red-50 w-full"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Side Icons */}
                <div className='flex gap-[10px]'>
                    <div className='bg-neutral-800 w-[48px] h-[48px] grid place-items-center rounded-3xl cursor-pointer hover:bg-neutral-700'>
                        <img src="/icons/whishlist.svg" alt="whishlist" />
                    </div>
                    <Link to='/cart'>
                        <div className='bg-neutral-800 w-[48px] h-[48px] grid place-items-center rounded-3xl hover:bg-neutral-700'>
                            <img src="/icons/cart.svg" alt="cart" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;