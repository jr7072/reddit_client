import { createSlice } from '@reduxjs/toolkit';

const options = {

    name: 'search',
    initialState: {
        term: 'home',
    },
    reducers:{

        changeTerm: (state, action) => {
            state.term = action.payload;
        } 
    }
}

const searchSlice = createSlice(options);

export const selectTerm = state => {
    return state.search.term;
}

export const { changeTerm } = searchSlice.actions;

export default searchSlice.reducer;