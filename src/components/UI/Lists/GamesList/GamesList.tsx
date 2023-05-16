import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {IGame} from "@/interfaces/IGame";
import {useRouter} from "next/router";

export const GamesList = () => {
    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)

    const [games, setGames] = useState<IGame[]>([])

    const loadGames = () => {
        if(!authState) {
            return;
        }
        fetch('http://localhost:3000/games', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            }
        }).then(res => res.json())
            .then(data => {
                setGames(data)
                console.log(data)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if(!authState) {
            router.push('/')
            return;
        }
        loadGames()
    }, [])

    return (
        <div></div>
    )
}