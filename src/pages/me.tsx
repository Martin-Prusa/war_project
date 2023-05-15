import {NavbarComponent} from "@/components";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {IUserInfo} from "@/interfaces";

export default function Me() {

    const router = useRouter();

    const {state, dispatch} = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState<IUserInfo | null>()

    useEffect(() => {
        console.log(state)
        if (!state) {
            router.push('/')
            return
        }

        fetch('http://localhost:3000/user/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.Authorization}`
            }
        }).then(res => res.json())
            .then(data => setUserInfo(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <main>
            <NavbarComponent/>
            <div className='container mx-auto'>
                <div className='text-center text-4xl'>
                    <h1 className='pt-10'>Profil</h1>
                </div>
                {userInfo?.id ?
                    <div className='pt-10'>
                        <ul className="-mb-8">
                            <li>
                                <div className="relative pb-8">
                                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"></span>
                                    <div className="relative flex space-x-3">
                                        <div>
            <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                    d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"/>
              </svg>
            </span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-500">Email: <span
                                                    className="font-medium text-gray-900">{userInfo.email}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative pb-8">
                                    <div className="relative flex space-x-3">
                                        <div>
            <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                    d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"/>
              </svg>
            </span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-500">Created at: <span
                                                    className="font-medium text-gray-900">{userInfo.createdAt}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    : null}
            </div>
        </main>
    )
}