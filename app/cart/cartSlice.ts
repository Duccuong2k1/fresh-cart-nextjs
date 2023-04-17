import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: 1,
    reducers: {
        increment: (state) => {
            return state + 1
        }
    }
});

const { actions, reducer } = cartSlice;
export const { increment } = actions;
export default reducer;