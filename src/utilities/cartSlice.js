import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

    // Name, InitialState, reducer
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {

        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        clearItems: (state, action) => {
            state.items.length = 0
        },
    },

});

export const {addItems, clearItems} = cartSlice.actions; // DESTRUCTURING THE METHODS

export default cartSlice.reducer;

