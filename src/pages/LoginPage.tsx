
import React from 'react'
import { loginRequest , profileRequest } from '../api/auth'
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const setToken = useAuthStore((state) => state.setToken);
    const setProfile = useAuthStore((state) => state.setProfile);

    const navigate = useNavigate();

    async function handleSubmint (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const email =(e.currentTarget.elements[0] as HTMLInputElement).value
        const password =(e.currentTarget.elements[1] as HTMLInputElement).value

        const {data} = await loginRequest(email, password)
        setToken(data.token)

        const profile = await profileRequest()
        setProfile(profile)

        navigate('/profile')
    }
    
    return (
        <form onSubmit={handleSubmint}>
        <input type="text" placeholder='email@mail.com'/>
        <input type="password" placeholder='*****'/>
        <button>Login</button>
        </form>
    )
}

export default LoginPage