import {IRating} from "@/interfaces/IRating";
import {IGenre} from "@/interfaces/IGenre";

export interface IGame {
    id?: string
    name: string,
    description: string,
    price: number,
    sale: number,
    publisher: string,
    developer: string,
    releaseDate: Date,
    genres: IGenre[]
}