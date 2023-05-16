import {useContext, useState} from "react";
import {ILogin} from "@/interfaces";
import {FormInput} from "@/components/UI/Forms";
import {BasicButton} from "@/components/UI/Buttons/BasicButton/BasicButton";
import {useRouter} from "next/router";
import {AuthContext} from "@/contexts";

export const LoginForm = () => {

    const router = useRouter();

    const {authState, authDispatch} = useContext(AuthContext)

    const [values, setValues] = useState<ILogin>({
        email: '',
        password: ''
    })

    const [showError, setShowError] = useState(false)

    const setPassword = (password: string) => {
        setValues({...values, password})
    }

    const setEmail = (email: string) => {
        setValues({...values, email})
    }

    const handleLogin = () => {
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
                if(data.Authorization) {
                    setShowError(false)
                    const auth = {Authorization: data.Authorization, email: data.data.email}
                    authDispatch({type: 'setAuthData', auth })
                    console.log(authState)
                    router.push('/')
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
                <FormInput placeholder='Password' type='password' label='Heslo' value={values.password} setValue={setPassword} />
                <BasicButton action={handleLogin}>Login</BasicButton>
                { showError ? <p className='text-red-500'>Chyba</p> : null}
            </form>
        </div>
    )
}