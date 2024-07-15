import { useEffect } from "react";
import { Netflix_RAPID_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieGener } from "../utils/moviesSlice";



const useMovies = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        const url = 'https://streaming-availability.p.rapidapi.com/genres?output_language=en';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': Netflix_RAPID_API_KEY,
                'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            dispatch(addMovieGener(result))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        // con();
        fetchData();
    }, []);

}
export default useMovies
