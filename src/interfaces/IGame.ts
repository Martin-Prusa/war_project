import {IRating} from "@/interfaces/IRating";
import {IGenre} from "@/interfaces/IGenre";
import {IReview} from "@/interfaces/IReview";

export interface IGame {
    id?: string
    name: string,
    description: string,
    price: number,
    sale: number,
    publisher: string,
    developer: string,
    releaseDate: Date,
    genres: IGenre[],
    ratings?: IReview[]
}