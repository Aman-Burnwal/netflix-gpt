import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name: "movies",
    initialState: {
        
        upcommingShows: null,
        popularShows: null,
        movieGenere : null,

    },
    reducers: {
        addMovieGener: (state, action) => {
            state.movieGenere = action.payload
        },
        addUommingShows: (state, action) => {
            state.upcommingShows = action.payload;
        },
        addPopularShows: (state, action) => {
            state.popularShows = action.payload;
        }

    }
})
export const { addPopularShows, addUommingShows, addMovieGener } = moviesSlice.actions;
export default moviesSlice.reducer;