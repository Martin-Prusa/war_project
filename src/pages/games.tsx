import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";
import {useRouter} from "next/router";
import {NavbarComponent} from "@/components";
import Link from "next/link";

export default function Games() {

    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)

    useEffect(() => {
        if(!authState) router.push('/')
    }, [])

    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Hry</h1>
                </div>
                <div>
                    <Link href='/ngame' className='text-green-700'>Nová hra</Link>
                </div>
            </div>
        </main>
    )
}