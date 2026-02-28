import {create} from 'zustand'
import {persist,createJSONStorage} from "zustand/middleware";

interface User {
    id: string;
    email: string;
}

interface AuthState {
    user : User | null;
    token: string | null;
    isAuthenticated: boolean;

    //action
    setAuth: (user: User,token:string) => void;
    logout: () => void;
}

export const useAuthStore=create<AuthState>()(
    persist(
        (set)=>({
            token: null,
            user: null,
            isAuthenticated: false,

            setAuth:(user,token)=>
                set({
                    user,
                    token,
                    isAuthenticated:true,
                }),
            logout:()=>
                set({
                    user: null,
                    token: null,
                    isAuthenticated:false,
                }),
        }),
        {
            name:'auth-store',
            storage:createJSONStorage(()=>localStorage),
            //only persist the user and token
            partialize:(state)=>({
                user:state.user,
                token:state.token,
                isAuthenticated:state.isAuthenticated,
            })
        }
    )
)
