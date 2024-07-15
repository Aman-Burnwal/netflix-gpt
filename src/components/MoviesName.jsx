import useMoviesAsGenere from "../hooks/useMoviesAsGenere"
import { temp_movies } from "../utils/constant"
import MovieCard from "./MovieCard"



const MoviesName = ({ name, id }) => {

    const movielist = temp_movies.shows;



    // useMoviesAsGenere
    return (
        <div className="px-1 relative  overflow-auto">
            <div className="pl-8 pb-4 text-2xl font-bold">{name}</div>
            <div className="flex flex-row gap-4  overflow-x-auto h-full w-full whitespace-nowrap">
                {movielist.map(list => <MovieCard key={list.id} alt={list.title} photoURL={list.imageSet.verticalPoster.w480} />)}

            </div>


        </div>



    )
}
export default MoviesName