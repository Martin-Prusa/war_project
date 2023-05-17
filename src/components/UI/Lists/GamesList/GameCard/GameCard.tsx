import {GameCardProps} from "@/components/UI/Lists/GamesList/GameCard/GameCardProps";
import {BasicButton} from "@/components/UI/Buttons";
import Link from "next/link";

export const GameCard = ({game}: GameCardProps) => {

    const deleteGame = () => {

    }

    return (
        <div className='border w-72 h-96 flex flex-col justify-between'>
            <div>
                <h2 className='text-2xl text-center mt-3'>{game.name}</h2>
                <div className='ml-3 mt-3 text-xs'>Vydáno: {new Date(game.releaseDate).toLocaleDateString()}</div>
                <div className='ml-3 mt-3 text-xs'>Vydavatel: {game.publisher}</div>
                <div className='ml-3 mt-3 text-xs'>Vývojář: {game.developer}</div>
                <ul>
                    { /*game.genres.map(g => <span key={g}
                    className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{g}</span>)*/}
                </ul>
                <div className='ml-3 mt-3'>{game.description}</div>
            </div>
            <div className='ml-3'>
                <BasicButton action={deleteGame}>Smazat</BasicButton>
                <Link className='mb-4 ml-3 inline-block rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600' href={'/editg/'+game.id}>Upravit</Link>
            </div>

        </div>
    )
}