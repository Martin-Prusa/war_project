import {NavbarComponent} from "@/components";
import {LoginForm} from "@/components/UI/Forms/LoginForm";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";

export default function LoginPage() {

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
                    <h1 className='pt-10'>Přihlásit se</h1>
                </div>
                <LoginForm />
            </div>
        </main>
    )
}