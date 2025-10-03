import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState : {
        items: []
    },
    reducers: {
        addItem:(state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;