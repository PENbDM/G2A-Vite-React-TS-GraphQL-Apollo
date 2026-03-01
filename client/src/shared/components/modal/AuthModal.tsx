import React from 'react';
import { useNavigate } from 'react-router';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose} // Close if clicking outside the white box
        >
            <div
                className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl p-8 transform transition-all animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Close Icon */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer text-xl"
                >
                    &times;
                </button>

                {/* Content */}
                <div className="text-center">


                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign in required</h2>
                    <p className="text-slate-500 mb-8">
                        To add this game to your cart and sync it across your devices, please log in to your account.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigate('/login')}
                            className="w-full bg-[#0868F3] hover:bg-[#0656c9] text-white font-bold py-3 rounded-lg transition-colors cursor-pointer"
                        >
                            Sign In
                        </button>

                        <button
                            onClick={onClose}
                            className="w-full bg-transparent hover:bg-slate-50 text-slate-600 font-semibold py-2 transition-colors cursor-pointer"
                        >
                            Maybe later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthModal;