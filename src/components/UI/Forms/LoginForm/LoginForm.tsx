import {useState} from "react";
import {ILogin} from "@/interfaces";
import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton";

export const LoginForm = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    } as ILogin)

    const [showError, setShowError] = useState(false)

    const setPassword = (password: string) => {
        setValues({...values, password})
    }

    const setEmail = (email: string) => {
        setValues({...values, email})
    }

    const handleLogin = () => {
        console.log(values)
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => {
                if(res.status !== 201) {
                    setShowError(true)
                    return
                }
                return res.json();
            }).then(data => {
            console.log(data)
        })
            .catch(e => setShowError(true))
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='example@email.com' type='email' label='Email' value={values.email} setValue={setEmail} />
                <FormInput placeholder='Password' type='password' label='Heslo' value={values.password} setValue={setPassword} />
                <BasicButton action={handleLogin}>Login</BasicButton>
                { showError ? <p className='text-red-500'>Chyba</p> : null}
            </form>
        </div>
    )
}