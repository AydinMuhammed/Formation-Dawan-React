import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.value ++
        },
        decrement: (state, action) => {
            state.value --
        },
        addNumber: (state, action) => {
            state.value += action.payload
        }
    }
});
export const { increment, decrement, addNumber } = counterSlice.actions;
export default counterSlice.reducer;