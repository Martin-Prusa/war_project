import {NavbarComponent} from "@/components";
import {RegisterForm} from "@/components/UI/Forms/RegisterForm";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";

export default function Register() {

    const router = useRouter();

    const {state, dispatch} = useContext(AuthContext)

    useEffect(() => {
        if(state) router.push('/games')
    }, [])

    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Registrovat se</h1>
                </div>
                <RegisterForm/>
            </div>
        </main>
    )
}