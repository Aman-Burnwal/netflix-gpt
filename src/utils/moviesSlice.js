import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name: "movies",
    initialState: {
        
        upcommingShows: null,
        popularShows: null,

    },
    reducers: {
        addUommingShows: (state, action) => {
            state.upcommingShows = action.payload;
        },
        addPopularShows: (state, action) => {
            state.popularShows = action.payload;
        }

    }
})
export const { addPopularShows, addUommingShows } = moviesSlice.actions;
export default moviesSlice.reducer;