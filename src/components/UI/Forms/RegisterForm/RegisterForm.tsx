import {useState} from "react";
import {ILogin, IRegister} from "@/interfaces";
import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton";
import {useRouter} from "next/router";

export const RegisterForm = () => {

    const router = useRouter();

    const [values, setValues] = useState({
        email: '',
        password: '',
        username: ''
    } as IRegister)

    const [showError, setShowError] = useState(false)

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
        fetch('http://localhost:3000/auth/register', {
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
            if(data.success) {
                setShowError(false)
                router.push('/successregistration')
            } else {
                setShowError(true)
            }
        })
            .catch(e => {
                console.error(e)
                setShowError(true)
            })
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='example@email.com' type='email' label='Email' value={values.email} setValue={setEmail} />
                <FormInput placeholder='Username' type='text' label='Uživatelské jméno' value={values.username} setValue={setUsername} />
                <FormInput placeholder='Password' type='password' label='Heslo' value={values.password} setValue={setPassword} />
                <BasicButton action={handleRegister}>Registrovat se</BasicButton>
                { showError ? <p className='text-red-500'>Chyba</p> : null}
            </form>
        </div>
    )
}