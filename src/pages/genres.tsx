import {NavbarComponent} from "@/components";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {GenresList} from "@/components/UI/Lists";
import {NewGenreForm} from "@/components/UI/Forms/NewGenreForm";
import {IGenre} from "@/interfaces";
import {config} from "@/config/config";

export default function Genres() {
    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)

    const [genres, setGenres] = useState<IGenre[]>([])

    const fetchGenres = () => {
        if(!authState) {
            return;
        }
        fetch(config.api.root+'genres', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            }
        }).then(res => res.json())
            .then(data => {
                setGenres(data)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if(!authState) {
            router.push('/')
            return;
        }
        fetchGenres()
    }, [])


    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Žánry</h1>
                </div>
                <NewGenreForm changeFunc={fetchGenres}/>
                <GenresList genres={genres} changeFunc={fetchGenres} />
            </div>
        </main>
    )
}