import Link from "next/link";

export default function Home() {
  return (
    <main className='bg-blue-50 m-0 p-0 min-h-screen'>
        <div className=''>
          <div className='text-center text-4xl'>
            <h1 className='pt-10'>Games Shop</h1>
          </div>
          <div className='border-2 max-w-md mx-auto border-blue-500 bg-blue-100 h-40 rounded-2xl mt-10'>
            <ul className='flex flex-col items-center w-full'>
              <li className='bg-blue-500 rounded-2xl text-white w-1/2 text-center my-5 py-2'>
                <Link href='/login'>Přihlásit se</Link>
              </li>
              <li className='bg-blue-500 rounded-2xl text-white w-1/2 text-center py-2'>
                <Link href='/register'>Registrovate se</Link>
              </li>
            </ul>
          </div>
        </div>
    </main>
  )
}