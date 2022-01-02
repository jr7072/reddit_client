import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './Features/Posts/postsSlice';
import categoriesReducer from "./Features/Categories/categoriesSlice";
import searchReducer from './Features/Search/searchSlice';
import commentsReducer from './Features/Comments/commentSlice';

export default configureStore({
    reducer:{
        posts: postsReducer,
        categories: categoriesReducer,
        search: searchReducer,
        comments: commentsReducer,
    }
});
