import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {
        addTvs: (state, action) => {
            state.data = action.payload
        },
        clearTvs: (state) => {
            state.data = null
        },
    }
})

export const { addTvs, clearTvs } = tvSlice.actions;
export default tvSlice.reducer