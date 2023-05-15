import {NavbarComponent} from "@/components";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";

export default function Me() {

    const router = useRouter();

    const {state, dispatch} = useContext(AuthContext)

    useEffect(() => {
        console.log(state)
        if(!state) router.push('/')
    }, [])

    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Profil</h1>
                </div>
            </div>
        </main>
    )
}