import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPostsByCategory = createAsyncThunk('posts/loadPostsByCategory', async (arg, thunkAPI) => {
    const route = `https://www.reddit.com/r/${arg.term}/${arg.category}.json?limit=20`
    const requestBody = await fetch(route);
    const jsonResponse = await requestBody.json();
    return jsonResponse;
})

const options = {

    name: 'posts',
    initialState: {
        posts:[],
        isLoadingPosts: false,
        hasError: false,
    },

    extraReducers: {

        [loadPostsByCategory.pending]: (state, action) => {

            state.isLoadingPosts = true;
            state.hasError = false;

        },

        [loadPostsByCategory.fulfilled]: (state, action) => {

            const posts = action.payload.data.children;

            state.posts = posts.map(post => {
                return {
                    key: post.data.id,
                    upVotes: post.data.ups,
                    postTitle: post.data.title,
                    postImage: post.data.url_overridden_by_dest,
                    postUser: post.data.author,
                    postTime: post.data.created,
                    postCommentCount: post.data.num_comments,
                }
            })
            
            state.isLoadingPosts = false;
            state.hasError = false;
        },

        [loadPostsByCategory.rejected]: (state, action) => {
            
            state.isLoadingPosts = false;
            state.hasError = true;
        }
    }
}

const postsSlice = createSlice(options);

export const selectPosts = (state) => {
    return state.posts.posts;
}

export const selectIsLoadingPosts = (state) => {
    return state.posts.isLoadingPosts;
}

export const selectHasError = (state) => {
    return state.posts.hasError;
}

export default postsSlice.reducer