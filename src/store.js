import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './Features/Posts/postsSlice';
import categoriesReducer from "./Features/Categories/categoriesSlice";


export default configureStore({
    reducer:{
        posts: postsReducer,
        categories: categoriesReducer,
    }
});
