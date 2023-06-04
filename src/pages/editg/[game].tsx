import {useRouter} from "next/router";
import {NavbarComponent} from "@/components";
import {NewGameForm} from "@/components/UI/Forms/NewGameForm";
import {useContext, useEffect, useState} from "react";
import {IGame, IGenre} from "@/interfaces";
import {AuthContext} from "@/contexts";

export default function EditGame() {
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

    const [error, setError] = useState<string>('')

    useEffect(() => {
        if(!authState) {
            router.push('/')
            return
        }
        fetch('http://localhost:3000/games/'+game, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            }
        }).then(res => res.json())
            .then(data => {
                setValues({...data, releaseDate: new Date(data.releaseDate), genres: data.genres.map((g: any) => g.genre)})
            })
            .catch(e => console.log(e))
    }, [])

    const edit = () => {
        //e.preventDefault()
        if(!authState) {
            router.push('/')
            return
        }
        fetch('http://localhost:3000/games/'+game, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            },
            body: JSON.stringify({
                id: values.id,
                name: values.name,
                description: values.description,
                price: values.price,
                sale: values.sale,
                publisher: values.publisher,
                developer: values.developer,
                releaseDate: values.releaseDate,
                genres: values.genres.map(g => g.id),
            })
        }).then(res => {
            if(res.status === 200) res.json().then(data => {
                setError('')
                router.push('/games')
            })
        }).catch(e => setError('Nelze upravit hru.'))
    }

    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Upravit hru</h1>
                </div>
                <NewGameForm values={values} setValues={setValues} submitFunc={edit} submitText='Upravit hru' />
                <div className='mb-3 text-red-500'>{error}</div>
            </div>
        </main>
    )
}