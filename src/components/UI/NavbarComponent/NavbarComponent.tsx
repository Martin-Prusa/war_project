import Link from "next/link";
import {useRouter} from "next/router";
import {useContext} from "react";
import {AuthContext} from "@/contexts";

export const NavbarComponent = () => {
    const router = useRouter();

    const {state, dispatch} = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({type: 'logout'})
        router.push('/')
    }

    return (
        <nav className='bg-gray-800 text-white p-5 flex justify-between items-center'>
            <Link href='/' className='text-2xl'>Games Store</Link>

            {state ?
                <div className='flex gap-3 items-center text-xl'>
                    <Link href='/games'>Hry</Link>
                    <Link href='/games'>Žánry</Link>
                    <Link href='/me' >Profil</Link>
                    <button onClick={handleLogout} className='text-xl'>Logout</button>
                </div>
                : null}
        </nav>
    )
}