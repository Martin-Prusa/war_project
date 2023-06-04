import {IGame} from "@/interfaces";
import {GenreItem} from "@/components/UI/Lists";

export const GameDetail = ({game}: {game: IGame}) => {
    return (
        <div>
            <h1 className='text-3xl mt-5 text-center'>{game.name}</h1>
            <div className='container mx-auto flex flex-col gap-5'>
                <div>Cena: {game.price} Kč</div>
                <div>Prodeje: {game.sale}</div>
                <div>Vývojář: {game.developer}</div>
                <div>Vydavatel: {game.publisher}</div>
                <div>Vydáno: {game.releaseDate.toLocaleDateString()}</div>
                <hr/>
                <div>
                    <h2 className='text-2xl'>Popis</h2>
                    <div className='mt-7'>{game.description}</div>
                </div>
                <hr/>
                <div>
                    <h2 className='text-2xl'>Žánry</h2>
                    <ul role="list" className="mt-7 flex gap-3 flex-wrap justify-center">
                        {game.genres.map(genre => <GenreItem btnText={''} key={genre.id!} boxText={'G'} text={genre.name} btnAction={() => {}}/>)}
                    </ul>
                </div>
                <hr/>
            </div>
        </div>
    )
}