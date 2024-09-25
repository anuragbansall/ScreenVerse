import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPersons: (state, action) => {
            state.data = action.payload
        },
        clearPersons: (state) => {
            state.data = null
        },
    }
})

export const { addPersons, clearPersons } = personSlice.actions;
export default personSlice.reducer