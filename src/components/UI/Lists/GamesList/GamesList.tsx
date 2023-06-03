import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {IGame} from "@/interfaces/IGame";
import {useRouter} from "next/router";
import {GameCard} from "@/components/UI/Lists/GamesList/GameCard";

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
        <div>
            <ul className='flex justify-center gap-3 flex-wrap mt-5'>
                {games ? games.map(game => <GameCard changeFunc={loadGames} game={game} key={game.id} />) : null}
            </ul>
        </div>
    )
}