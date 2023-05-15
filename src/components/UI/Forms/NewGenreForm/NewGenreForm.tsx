import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton";
import {useContext, useState} from "react";
import {IGenre} from "@/interfaces";
import {AuthContext} from "@/contexts";
import {NewGenreFormProps} from "@/components/UI/Forms/NewGenreForm/NewGenreFormProps";

export const NewGenreForm = ({changeFunc}: NewGenreFormProps) => {

    const {state, dispatch} = useContext(AuthContext)

    const [values, setValues] = useState<IGenre>({name: ''})

    const setName = (name: string) => {
        setValues({...values, name})
    }
    const add = () => {
        if(!state) return
        fetch('http://localhost:3000/genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.Authorization}`
            },
            body: JSON.stringify(values)
        }).then(res => changeFunc())
            .catch(e => console.log(e))
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='Super hra' type='text' label='Žánr' value={values.name} setValue={setName} />
                <BasicButton action={add}>Přidat</BasicButton>
            </form>
        </div>
    )
}