import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {NavbarComponent} from "@/components";
import {NewGameForm} from "@/components/UI/Forms/NewGameForm";
import {IGame} from "@/interfaces";
import {set} from "yaml/dist/schema/yaml-1.1/set";

export default function Ngame() {
    const router = useRouter();

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

    const create = () => {
        if(!authState) return
        fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            },
            body: JSON.stringify({
                ...values,
                genres: values.genres.map(g => g.id),
                price: parseInt(values.price+''),
                sale: parseInt(values.sale+'')

            })
        }).then(res => {
            if (res.status === 201) {
                setError('')
                router.push('/games')
            }
        }).catch(e => setError('Nelze přidat hru.'))
    }

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
                <NewGameForm values={values} setValues={setValues} submitFunc={create} submitText='Vytvořit hru' />
                <div className='text-red-500 mb-3'>{error}</div>
            </div>
        </main>
    )
}