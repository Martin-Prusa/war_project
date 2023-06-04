import {useState} from "react";
import {IRegister} from "@/interfaces";
import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton/BasicButton";
import {useRouter} from "next/router";

export const RegisterForm = () => {

    const router = useRouter();

    const [values, setValues] = useState<IRegister>({
        email: '',
        password: '',
        username: ''
    })

    const [error, setError] = useState<string>('')

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
        if(values.email.trim() === '') {
            setError('Email musí být vyplněný.')
            return
        }
        if(values.username.trim() === '') {
            setError('Uživatelské jméno musí být vyplněné.')
            return
        }
        if(values.password.length < 5) {
            setError('Heslo musí mít alespoň 6 znaků.')
            return
        }
        fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => {
                if(res.status !== 201) {
                    setError('Nelze se zaregistrovat. Zkontrolujte zadané hodnoty.')
                    return
                }
                return res.json();
            }).then(data => {
            if(data.success) {
                setError('')
                router.push('/successregistration')
            } else {
                setError('Nelze se zaregistrovat.')
            }
        })
            .catch(() => {
                setError('Nelze se zaregistrovat.')
            })
    }

    return (
        <div className='bg-white'>
            <form action="">
                <FormInput placeholder='example@email.com' type='email' label='Email' value={values.email} setValue={setEmail} />
                <FormInput placeholder='Username' type='text' label='Uživatelské jméno' value={values.username} setValue={setUsername} />
                <FormInput placeholder='Password' type='password' label='Heslo' value={values.password} setValue={setPassword} />
                <BasicButton action={handleRegister}>Registrovat se</BasicButton>
                <p className='text-red-500'>{error}</p>
            </form>
        </div>
    )
}