import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton";
import {useContext, useState} from "react";
import {IGame} from "@/interfaces/IGame";
import {useRouter} from "next/router";
import {AuthContext} from "@/contexts";
import {log} from "util";

export const NewGameForm = () => {

    const router = useRouter();

    const {state, dispatch} = useContext(AuthContext)

    const [values, setValues] = useState<IGame>({
        name: '',
        description: '',
        price: 0,
        sale: 0,
        publisher: '',
        developer: '',
        releaseDate: new Date(),
        genres: []
    })

    const setName = (name: string) => {
        setValues({...values, name})
    }

    const setDescription = (description: string) => {
        setValues({...values, description})
    }

    const setPrice = (price: number) => {
        setValues({...values, price})
    }

    const setSale = (sale: number) => {
        setValues({...values, sale})
    }

    const setPublisher = (publisher: string) => {
        setValues({...values, publisher})
    }

    const setDeveloper = (developer: string) => {
        setValues({...values, developer})
    }

    const setReleaseDate = (releaseDate: Date) => {
        setValues({...values, releaseDate})
    }

    const create = () => {
        if(!state) return
        fetch('http://localhost:3000/genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.Authorization}`
            },
            body: JSON.stringify(values)
        }).then(res => {

        }).catch(e => console.log(e))
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
                <FormInput placeholder='' type='date' label='Datum vydání' value={values.releaseDate} setValue={setReleaseDate} />
                <BasicButton action={create}>Vytvořit hru</BasicButton>
            </form>
        </div>
    )
}