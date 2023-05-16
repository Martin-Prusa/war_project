import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";
import {NavbarComponent} from "@/components";
import {NewGameForm} from "@/components/UI/Forms/NewGameForm";

export default function Ngame() {
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
                    <h1 className='pt-10'>Nová hra</h1>
                </div>
                <NewGameForm />

            </div>
        </main>
    )
}