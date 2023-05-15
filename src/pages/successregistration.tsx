import {NavbarComponent} from "@/components";
import Link from "next/link";

export default function Successregistration() {
    return (
        <main>
            <NavbarComponent />
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Úspěšně jste se zaregistrovali</h1>
                </div>
                <div className='mt-5 flex justify-center'>
                    <div className='mr-1'>Nyní se můžete</div>
                    <Link href='/login' className='text-green-500'>přihlásit</Link>
                </div>
            </div>
        </main>
    )
}