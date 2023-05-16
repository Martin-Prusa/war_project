import {useContext} from "react";
import {AuthContext} from "@/contexts";
import {GenreItem, GenreListProps} from "@/components/UI/Lists";

export const GenresList = ({genres, changeFunc}: GenreListProps) => {

    const {authState, authDispatch} = useContext(AuthContext)

    const deleteGenre = (id: string) => {
        if(!authState) return
        fetch('http://localhost:3000/genres/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            },
        }).then(res => changeFunc())
            .catch(e => console.log(e))
    }

    return (
        <ul role="list" className="mt-10 flex gap-3 flex-wrap justify-center">
            {genres.map(genre => <GenreItem key={genre.id!} boxText={'G'} text={genre.name} btnAction={() => deleteGenre(genre.id!)}/>)}
        </ul>
    )
}