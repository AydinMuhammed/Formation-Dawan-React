import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";


export default configureStore({
    reducer: {
        // Add your reducers here
        counter: counterSlice.reducer,

    },
    });