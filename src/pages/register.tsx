import {NavbarComponent} from "@/components";
import {RegisterForm} from "@/components/UI/Forms/RegisterForm";

export default function Register() {
    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Registrovat se</h1>
                </div>
                <RegisterForm/>
            </div>
        </main>
    )
}