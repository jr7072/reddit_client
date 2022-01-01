import { createSlice } from "@reduxjs/toolkit";

const options = {

    name: 'categories',
    initialState: {
        category: "hot",
        activeStatuses: {
            hot: true,
            new: false,
            top: false,
            rising: false,
        }
    },
    reducers:{

        changeCategory: (state, action) => {

            state.category = action.payload;

        },

        enableButton: (state, action) => {

            for(let key of Object.keys(state.activeStatuses)){
                
                console.log(key);
                if(key === action.payload){
                    state.activeStatuses[key] = true;
                    continue;
                }
                
                state.activeStatuses[key] = false;
            }
        }

    }
}

const categorySlice = createSlice(options);

export const selectCategory = state => {
    return state.categories.category;
}

export const selectActiveStatuses = state => {
    return state.categories.activeStatuses;
}

export const {changeCategory, enableButton} = categorySlice.actions;
export default categorySlice.reducer;