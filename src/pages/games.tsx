import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";
import {useRouter} from "next/router";
import {NavbarComponent} from "@/components";
import {LoginForm} from "@/components/UI/Forms/LoginForm";

export default function Games() {

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
                    <h1 className='pt-10'>Games</h1>
                </div>
            </div>
        </main>
    )
}