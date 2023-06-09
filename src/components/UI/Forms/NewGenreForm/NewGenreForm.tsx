import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton/BasicButton";
import {useContext, useState} from "react";
import {IGenre} from "@/interfaces";
import {AuthContext} from "@/contexts";
import {NewGenreFormProps} from "@/components/UI/Forms/NewGenreForm/NewGenreFormProps";
import {config} from "@/config/config";

export const NewGenreForm = ({changeFunc}: NewGenreFormProps) => {

    const {authState, authDispatch} = useContext(AuthContext)

    const [values, setValues] = useState<IGenre>({name: ''})

    const [error, setError] = useState<string>('')

    const setName = (name: string) => {
        setValues({...values, name})
    }
    const add = () => {
        if(values.name.trim() === '') {
            setError('Název žánru musí být vyplněný.')
            return;
        }
        if(!authState) return
        fetch(config.api.root+'genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            },
            body: JSON.stringify(values)
        }).then(() => {
            setError('')
            setName('')
            changeFunc()
        })
            .catch(() => setError('Nelze přidat žánr.'))
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='Super hra' type='text' label='Žánr' value={values.name} setValue={setName} />
                <div className='text-red-500 mb-3'>{error}</div>
                <BasicButton action={add}>Přidat</BasicButton>
            </form>
        </div>
    )
}