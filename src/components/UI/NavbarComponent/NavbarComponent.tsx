import Link from "next/link";
import {useRouter} from "next/router";
import {useContext} from "react";
import {AuthContext} from "@/contexts";

export const NavbarComponent = () => {
    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)

    const handleLogout = () => {
        authDispatch({type: 'logout'})
        router.push('/')
    }

    return (
        <nav className='bg-gray-800 text-white p-5 flex justify-between items-center'>
            <Link href='/' className='text-2xl'>Games Store</Link>

            {authState ?
                <div className='flex gap-3 items-center text-xl'>
                    <Link href='/games'>Hry</Link>
                    <Link href='/genres'>Žánry</Link>
                    <Link href='/me' >Profil</Link>
                    <button onClick={handleLogout} className='text-xl'>Logout</button>
                </div>
                : null}
        </nav>
    )
}