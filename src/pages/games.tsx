import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";
import {useRouter} from "next/router";

export default function Games() {

    const router = useRouter();

    const {state, dispatch} = useContext(AuthContext)

    useEffect(() => {
        console.log(state)
        if(!state) router.push('/')
    }, [])

    return <main>
        games
    </main>
}