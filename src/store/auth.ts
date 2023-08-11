import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    token:string | null
    profile: any
    isAuth:  boolean
}

type Actions = {
    setToken:(token:string) => void
    setProfile:(profile:any) => void
    logout:() => void
}

export const useAuthStore = create(persist<State & Actions>((set) => ({
    token :null,
    profile : null,
    isAuth : false,
    setToken:(token:string) => set((state) => ({
        token,
        isAuth: true
    })),
    setProfile: (profile : any) => set( (state) => ({
        profile
    })),
    logout:()=>set( (state) => ({
        token: null,
        isAuth: false,
        profile: null
    }))
    
}),
{
    name: 'auth'
}))