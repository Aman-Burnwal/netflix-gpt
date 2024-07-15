import { Netflix_RAPID_API } from "../utils/constant";

const useMoviesAsGenere =  async (type) => {
  
    const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&series_granularity=episode&genres='
        + type + 
        '&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&catalogs=netflix&show_type=movie';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': Netflix_RAPID_API,
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
export default useMoviesAsGenere;