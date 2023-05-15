import {useState} from "react";
import {ILogin, IRegister} from "@/interfaces";
import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton";

export const RegisterForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        username: ''
    } as IRegister)

    const setPassword = (password: string) => {
        setValues({...values, password})
    }

    const setUsername = (username: string) => {
        setValues({...values, username})
    }

    const setEmail = (email: string) => {
        setValues({...values, email})
    }

    const handleRegister = () => {
        console.log(values)
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='example@email.com' type='email' label='Email' value={values.email} setValue={setEmail} />
                <FormInput placeholder='Username' type='text' label='Uživatelské jméno' value={values.username} setValue={setUsername} />
                <FormInput placeholder='Password' type='password' label='Heslo' value={values.password} setValue={setPassword} />
                <BasicButton action={handleRegister}>Registrovat se</BasicButton>
            </form>
        </div>
    )
}