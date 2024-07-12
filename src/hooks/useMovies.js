import { useEffect } from "react";
import { addPopularShows, addUommingShows } from "../utils/moviesSlice";
import { Netflix_RAPID_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";


const useMovies = () => {
    const dispatch = useDispatch();


    const fetchData = async () => {
        const headers = {
            'X-RapidAPI-Key': Netflix_RAPID_API_KEY,
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        };

        // Fetch new shows
        const fetchNewShows = async () => {
            const newShowsUrl = "https://streaming-availability.p.rapidapi.com/changes";
            const newShowsQueryParams = new URLSearchParams({
                country: 'in',
                changeType: 'new',
                itemType: 'show',
                catalogs: 'netflix'
            });

            try {
                const response = await fetch(`${newShowsUrl}?${newShowsQueryParams}`, { method: 'GET', headers });
                const data = await response.json();
                // console.log('New Shows:', data);
                dispatch(addUommingShows(data));
            } catch (error) {
                console.error('Error fetching new shows:', error);
            }
        };

        // Fetch shows by filters
        const fetchShowsByFilters = async () => {
            const filterShowsUrl = "https://streaming-availability.p.rapidapi.com/    ";
            const filterShowsQueryParams = new URLSearchParams({
                country: 'in',
                orderBy: 'popularity_1week'
            });

            try {
                const response = await fetch(`${filterShowsUrl}?${filterShowsQueryParams}`, { method: 'GET', headers });
                const data = await response.json();
                console.log('Shows by Filters:', data);
                dispatch(addPopularShows(data));
            } catch (error) {
                console.error('Error fetching shows by filters:', error);
            }
        };

        // Execute both fetches
        await fetchNewShows();

        //  have issue in url
        // await fetchShowsByFilters();
    };





    useEffect(() => {
        // con();
        fetchData();
    }, []);

}
export default useMovies