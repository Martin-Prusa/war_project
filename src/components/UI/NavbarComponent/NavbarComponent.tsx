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
            {state ? <button onClick={handleLogout} className='text-xl'>Logout</button> : null}
        </nav>
    )
}