import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton/BasicButton";
import {useContext, useState} from "react";
import {useRouter} from "next/router";
import {AuthContext} from "@/contexts";
import {NewGameFormProps} from "@/components/UI/Forms/NewGameForm/NewGameFormProps";

export const NewGameForm = ({submitFunc, values, setValues, submitText}: NewGameFormProps) => {

    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)


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
                <BasicButton action={submitFunc}>{submitText}</BasicButton>
            </form>
        </div>
    )
}