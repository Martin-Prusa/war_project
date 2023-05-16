import Link from "next/link";
import {NavbarComponent} from "@/components";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts";

export default function Home() {

  const router = useRouter();

  const {authState, authDispatch} = useContext(AuthContext)

  useEffect(() => {
    if(authState) router.push('/games')
  }, [])


  return (
    <main className='bg-gray-50 m-0 p-0 min-h-screen'>
      <NavbarComponent />
        <div className=''>
          <div className='text-center text-4xl'>
            <h1 className='pt-10'>Games Shop</h1>
          </div>
          <div className='border-2 max-w-md mx-auto border-gray-500 bg-gray-100 h-40 rounded-2xl mt-10'>
            <ul className='flex flex-col items-center w-full'>
              <li className='bg-gray-500 hover:bg-gray-600 transition-colors rounded-2xl text-white w-1/2 text-center my-5 '>
                <Link className='w-full h-full block py-2' href='/login'>Přihlásit se</Link>
              </li>
              <li className='bg-gray-500 hover:bg-gray-600 transition-colors rounded-2xl text-white w-1/2 text-center'>
                <Link className='w-full h-full block py-2' href='/register'>Registrovat se</Link>
              </li>
            </ul>
          </div>
        </div>
    </main>
  )
}