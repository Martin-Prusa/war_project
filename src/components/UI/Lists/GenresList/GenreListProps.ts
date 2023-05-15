import {IGenre} from "@/interfaces";

export interface GenreListProps {
    genres: IGenre[]
    changeFunc: () => void
}