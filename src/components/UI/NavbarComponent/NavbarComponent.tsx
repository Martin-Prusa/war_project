import Link from "next/link";

export const NavbarComponent = () => {
    return (
        <nav className='bg-gray-800 text-white p-5'>
            <Link href='/' className='text-2xl'>Games Store</Link>
        </nav>
    )
}