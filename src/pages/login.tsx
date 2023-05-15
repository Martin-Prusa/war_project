import {NavbarComponent} from "@/components";
import {LoginForm} from "@/components/UI/Forms/LoginForm";

export default function LoginPage() {
    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Přihlásit se</h1>
                </div>
                <LoginForm />
            </div>
        </main>
    )
}