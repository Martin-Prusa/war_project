import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton/BasicButton";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {AuthContext} from "@/contexts";
import {NewGameFormProps} from "@/components/UI/Forms/NewGameForm/NewGameFormProps";
import {IGenre} from "@/interfaces";
import {GenreItem} from "@/components/UI/Lists";

export const NewGameForm = ({submitFunc, values, setValues, submitText}: NewGameFormProps) => {

    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        if(!authState) {
            router.push('/')
            return;
        }
        fetch('http://localhost:3000/genres', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            }
        }).then(res => res.json())
            .then(data => {
                setGenres(data)
            })
            .catch(e => console.log(e))
    }, [])

    const setName = (name: string) => {
        setValues({...values, name})
    }

    const setDescription = (description: string) => {
        setValues({...values, description})
    }

    const setPrice = (price: string) => {
        setValues({...values, price: parseFloat(price)})
    }

    const setSale = (sale: string) => {
        setValues({...values, sale: parseInt(sale)})
    }

    const setPublisher = (publisher: string) => {
        setValues({...values, publisher})
    }

    const setDeveloper = (developer: string) => {
        setValues({...values, developer})
    }

    const setReleaseDate = (releaseDate: Date) => {
        setValues({...values, releaseDate: new Date(releaseDate)})
    }

    const setGameGenres = (id: string) => {
        if(iclGenre(id)) setValues({...values, genres: values.genres.filter(x => x.id !== id)})
        else setValues({...values, genres: [...values.genres, {id: id, name: ''}]})
        console.log(values)
    }

    const iclGenre = (id: string) => {
        return  values.genres.some(g => g.id === id)
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='Super hra' type='text' label='Název' value={values.name} setValue={setName} />
                <FormInput placeholder='Lorem ipsum dolor sit amet' type='text' label='Popis' value={values.description} setValue={setDescription} />
                <FormInput placeholder='100' type='number' label='Cena' value={values.price} setValue={setPrice} />
                <FormInput placeholder='100' type='number' label='Prodeje' value={values.sale} setValue={setSale} />
                <FormInput placeholder='Publisher s.r.o' type='text' label='Vydavatel' value={values.publisher} setValue={setPublisher} />
                <FormInput placeholder='Developer s.r.o' type='text' label='Vývojář' value={values.developer} setValue={setDeveloper} />
                <FormInput placeholder='' type='date' label='Datum vydání' value={values.releaseDate.toISOString().split('T')[0]} setValue={setReleaseDate} />
                <div className='mb-3'>
                    <ul role="list" className="mt-10 flex gap-3 flex-wrap justify-center">
                        {genres.map(genre => <GenreItem key={genre.id!} btnText={!iclGenre(genre.id!) ? 'Add' : 'Del'} boxText={'G'} text={genre.name} btnAction={() => setGameGenres(genre.id!)}/>)}
                    </ul>
                </div>
                <BasicButton action={submitFunc}>{submitText}</BasicButton>
            </form>
        </div>
    )
}