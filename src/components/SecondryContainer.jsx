import { useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";

import MoviesName from "./MoviesName";
import useMoviesAsGenere from "../hooks/useMoviesAsGenere";

const SecondryContainer = () => {

  const movieType = useSelector(state => state.movies?.movieGenere);

  // useMovies();

  if(movieType == null) return null;
  return (
    <div className="w-full  relative text-white ">

      
      <div className="-mt-24  mx-10  flex flex-col  bg-opacity-85 h-full bg-black ">
        {movieType.map((movie) => < MoviesName key={movie.id} name={movie.name} id={movie.id} />)}
      
       
        
      </div>
   
      

      
   
     
    </div>
  )
}
export default SecondryContainer;