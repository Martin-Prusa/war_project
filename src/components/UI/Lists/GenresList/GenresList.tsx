import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {IGenre} from "@/interfaces";

export const GenresList = () => {

    const {state, dispatch} = useContext(AuthContext)

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        if(!state) return
        fetch('http://localhost:3000/genres', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.Authorization}`
            }
        }).then(res => res.json())
            .then(data => {
                setGenres(data)
                console.log(data)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <ul role="list" className="mt-10 flex gap-3 flex-wrap justify-center">
            {genres.map(genre => <li key={genre.id} className="flex rounded-md w-72 h-12">
                <div
                    className="flex flex-shrink-0 w-16 items-center justify-center bg-green-500 rounded-l-md text-sm font-medium text-white">{genre.id}
                </div>
                <div
                    className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                    <div className="flex-1 truncate px-4 py-2 text-sm">
                        <span className="font-medium text-gray-900 hover:text-gray-600">{genre.name}</span>
                    </div>
                </div>
            </li>)}
        </ul>
    )
}