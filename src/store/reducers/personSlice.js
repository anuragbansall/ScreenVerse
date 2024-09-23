import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPersons: (state, action) => {
            state.data = action.payload
        },
        clearPersons: (state) => {
            state.data = []
        },
    }
})

export default personSlice.reducer