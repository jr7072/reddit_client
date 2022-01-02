import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCommentsForPost = createAsyncThunk('comments/loadCommentsForPost', async (arg, thunkAPI) => {
    const route = `https://www.reddit.com/r/${arg.subTerm}/comments/${arg.articleId}/_.json`;
    const response = await fetch(route);
    const jsonResponse = await response.json();
    return jsonResponse;
})

const options = {

    name:"comments",
    initialState: {
        comments: {},
        isLoadingComments: false,
        hasError: false,
    },
    extraReducers: {

        [loadCommentsForPost.pending]: (state, action) => {

            state.isLoadingComments = true;
            state.hasError = false;
        },

        [loadCommentsForPost.fulfilled]: (state, action) => {

            state.comments[action.payload[0].data.children[0].data.id] = action.payload[1].data.children.map(comment => {
                return {
                    id: comment.data.id,
                    author: comment.data.author,
                    body:  comment.data.body,
                }
            })
            state.isLoadingComments = false;
            state.hasError = false;
        },

        [loadCommentsForPost.rejected]: (state, action) => {

            state.isLoadingComments = false;
            state.hasError = true;
        }
    }
}

const commentsSlice = createSlice(options);

export const selectComments = state => {
    return state.comments.comments;
}

export const selectIsLoadingComments = state => {
    return state.comments.isLoadingComments;
}

export const selectHasErrorComments = state => {
    return state.comments.hasError;
}

export default commentsSlice.reducer;