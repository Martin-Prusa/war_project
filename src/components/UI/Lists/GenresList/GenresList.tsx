import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts";
import {IGenre} from "@/interfaces";
import {GenreItem, GenreListProps} from "@/components/UI/Lists";

export const GenresList = ({genres, changeFunc}: GenreListProps) => {

    const {state, dispatch} = useContext(AuthContext)

    const deleteGenre = (id: number) => {
        if(!state) return
        fetch('http://localhost:3000/genres/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.Authorization}`
            },
        }).then(res => changeFunc())
            .catch(e => console.log(e))
    }

    return (
        <ul role="list" className="mt-10 flex gap-3 flex-wrap justify-center">
            {genres.map(genre => <GenreItem key={genre.id!} boxText={genre.id!.toString()} text={genre.name} btnAction={() => deleteGenre(genre.id!)}/>)}
        </ul>
    )
}