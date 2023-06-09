import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {IGame} from "@/interfaces";
import {NavbarComponent} from "@/components";
import {GameDetail} from "@/components/UI/GameDetail";
import {ReviewsList} from "@/components/UI/Lists";
import {ReviewForm} from "@/components/UI/Forms";
import {config} from "@/config/config";

export default function GameDetailPage() {

    const router = useRouter();
    const {game} = router.query;

    const {authState, authDispatch} = useContext(AuthContext)

    const [values, setValues] = useState<IGame>({
        name: '',
        description: '',
        price: 0,
        sale: 0,
        publisher: '',
        developer: '',
        releaseDate: new Date(),
        genres: [],
    })

    const loadGame = () => {
        if(!authState) {
            router.push('/')
            return
        }
        fetch(config.api.root+'games/'+game, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            }
        }).then(res => res.json())
            .then(data => {
                setValues({...data, releaseDate: new Date(data.releaseDate), genres: data.genres.map((g: any) => g.genre)})
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        loadGame()
    }, [])

    return (
        <main>
            <NavbarComponent />
            <GameDetail game={values} />
            <ReviewForm changeFunc={loadGame} />
            <ReviewsList reviews={values.ratings} />
        </main>
    )
}