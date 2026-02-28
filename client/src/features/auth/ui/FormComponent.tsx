import React from "react";
import { Link } from "react-router"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {LOGIN_USER, REGISTER_USER} from "@/entities/user/api/userQuery.ts";
import { useMutation } from "@apollo/client/react";
import { AuthSchema, type AuthCredentials } from '../model/auth.schema.ts'
import type {RegisterResponse,LoginResponse} from 'src/shared/types/user.ts'
import {useAuthStore} from "@/entities/user/model/auth-store.ts";
interface FormComponentProps {
    mode: 'register' | 'login';
}

export function FormComponent({ mode }: FormComponentProps) {
    const setAuth = useAuthStore((state) => state.setAuth);
    const isRegister = mode === 'register';
    const [showPassword, setShowPassword] = React.useState(false);

    const [reg] = useMutation<RegisterResponse,AuthCredentials>(REGISTER_USER);
    const [log] = useMutation<LoginResponse,AuthCredentials>(LOGIN_USER);

    const {
        register,
        handleSubmit,
        watch, // Used to track password changes in real-time
        formState: { errors, isSubmitting },
    } = useForm<AuthCredentials>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Subscribing to password changes
    const passwordValue = watch("password", "");

    // Logic for the dynamic requirement circles
    const requirements = [
        { label: "At least 8 characters", met: passwordValue.length >= 8 },
        { label: "Special character or a digit", met: /[0-9!@#$%^&*(),.?":{}|<>]/.test(passwordValue) },
        { label: "At least 1 small letter", met: /[a-z]/.test(passwordValue) },
        { label: "At least 1 capital letter", met: /[A-Z]/.test(passwordValue) },
    ];

    const onSubmit = async (data: AuthCredentials) => {
        try {
            if (isRegister) {
                const response = await reg({
                    variables: data, // email and password map exactly to AuthCredentials
                });
                if (response.data?.register) {
                    const { user, token } = response.data.register;
                    setAuth(user, token); // Store data globally
                    console.log("Registered & Logged in!");
                }
                // TypeScript now knows 'response.data.register' exists
                console.log('Registration successful:', response.data?.register);
            } else {
                const response = await log({
                    variables: data,
                });
                if(response.data?.login){
                    const {user, token } = response.data.login;
                    setAuth(user, token);
                    console.log('Logged in!');
                }
                // TypeScript now knows 'response.data.login' exists
                console.log('Login successful:', response.data?.login);
            }
        } catch (err) {
            console.error('Mutation failed:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-115 h-fit pb-10 px-10 pt-3 border border-solid border-slate-200 rounded-md shadow-sm bg-white'>
                <div>
                    <p className='text-2xl font-bold mb-2 mt-4 text-slate-900'>
                        {isRegister ? 'Create an account' : 'Welcome back'}
                    </p>
                    <p className='text-sm text-slate-500'>
                        {isRegister
                            ? 'See order history, get a game library and check out faster!'
                            : 'Sign in to your account to continue.'}
                    </p>
                </div>

                <div className='mt-5 flex flex-col gap-3'>
                    <FieldLabel className="text-slate-700 font-semibold">Email</FieldLabel>
                    <Input
                        className={`h-11 border-slate-300 ${errors.email ? 'border-red-500' : ''}`}
                        {...register('email')}
                    />
                    {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}

                    <FieldLabel className="text-slate-700 font-semibold">Password</FieldLabel>
                    <div className="relative">
                        <Input
                            className={`h-11 pr-16 border-slate-300 ${errors.password ? 'border-red-500' : ''}`}
                            type={showPassword ? "text" : "password"}
                            {...register('password')}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            className=" cursor-pointer absolute right-0 top-0 h-full px-4 text-xs font-bold uppercase text-slate-500 hover:bg-transparent"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </Button>
                    </div>
                    {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

                    {/* DYNAMIC REQUIREMENTS LIST */}
                    {isRegister && (
                        <ul className="mt-2 space-y-2">
                            {requirements.map((req, index) => (
                                <li key={index} className="flex items-center gap-2 text-xs transition-all">
                                    <div className={`h-2.5 w-2.5 rounded-full shrink-0 transition-colors duration-300 ${
                                        passwordValue.length === 0
                                            ? "bg-slate-400"
                                            : req.met ? "bg-green-500" : "bg-red-500"
                                    }`} />
                                    <span className={`text-sm font-medium ${
                                        passwordValue.length > 0 && req.met ? "text-green-700" : "text-slate-600"
                                    }`}>
                                        {req.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='mt-10'>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className='cursor-pointer w-full h-11 bg-slate-900 hover:bg-slate-800 text-white transition-opacity disabled:opacity-50'
                    >
                        {isSubmitting ? 'Loading...' : (isRegister ? 'Create account' : 'Sign In')}
                    </Button>
                </div>

                {/* Divider */}
                <div className="relative flex mt-10 items-center">
                    <div className="grow border-t border-slate-300"></div>
                    <span className="shrink mx-4 text-slate-500 text-sm">
                        {isRegister ? 'or create an account with' : 'or sign in with'}
                    </span>
                    <div className="grow border-t border-slate-300"></div>
                </div>

                {/* Social Buttons */}
                <div className='flex gap-4 mt-5'>
                    <div className='flex justify-center border gap-2 border-gray-300 rounded-md items-center w-full p-2.5 cursor-pointer hover:bg-slate-50 transition-colors'>
                        <img className='w-5 h-5' src='/icons/google.png' alt='google'/>
                        <p className="text-sm font-medium">Google</p>
                    </div>
                    <div className='flex justify-center border gap-2 border-gray-300 rounded-md items-center w-full p-2.5 cursor-pointer hover:bg-slate-50 transition-colors'>
                        <img className='w-5 h-5' src='/icons/paypal.png' alt='paypal'/>
                        <p className="text-sm font-medium">PayPal</p>
                    </div>
                </div>

                <div className='flex justify-center mt-6 text-sm'>
                    <p className="text-slate-600">
                        {isRegister ? 'Have an account already? ' : "Don't have an account? "}
                    </p>
                    <Link to={isRegister ? '/login' : '/register'} className='text-[#0868F3] ml-1 font-bold hover:underline'>
                        {isRegister ? 'Sign In' : 'Sign Up'}
                    </Link>
                </div>
            </div>
        </form>
    );
}