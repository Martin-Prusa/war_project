import {NavbarComponent} from "@/components";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";
import {GenresList} from "@/components/UI/Lists";

export default function Genres() {
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
                    <h1 className='pt-10'>Žánry</h1>
                    <GenresList />
                </div>
            </div>
        </main>
    )
}