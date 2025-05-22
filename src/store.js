import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import selectedArticlesReducer from "./slices/selectedArticlesSlice";


export default configureStore({
    reducer: {
        // Add your reducers here
        counter: counterSlice.reducer,
        selectedArticles: selectedArticlesReducer

    },
    });