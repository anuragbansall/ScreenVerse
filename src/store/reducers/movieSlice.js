import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.data = action.payload
        },
        clearMovies: (state) => {
            state.data = null
        },
    }
})

export const {addMovies, clearMovies} = movieSlice.actions
export default movieSlice.reducer