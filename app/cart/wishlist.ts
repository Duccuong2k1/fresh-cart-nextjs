import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from './../../lib/res/product.d';

export interface WishListState extends ProductType {
    wishLists: {
        id: number;
    }[];
}

const getWishListFromLocalStorage = () => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

        const cartItems = localStorage.getItem('wishlist');
        if (cartItems) {
            return JSON.parse(cartItems);
        }
    }
    return [];
}
const initialState: WishListState = {
    wishLists: getWishListFromLocalStorage(),
};

const wishlistsSlice = createSlice({
    name: "wishLists",
    initialState: initialState,
    reducers: {
        addProductToWish(state, action) {
            const indexProductInWish = state.wishLists.findIndex((item) => item.id === action?.payload.id)
            if (indexProductInWish !== -1) {

                state.wishLists
            } else {
                state.wishLists.push({ ...action.payload })

            }

        },
        removeProductInWish(state, action) {
            const productRemove = state.wishLists.filter((item) => item.id !== action.payload)
            state.wishLists = productRemove
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => {
                const cartActionTypes = [addProductToWish.type, removeProductInWish.type,];
                return cartActionTypes.includes(action.type);
            },
            (state) => {
                if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
                    localStorage.setItem('wishlist', JSON.stringify(state.wishLists));
                }
            }
        );
    }
});

const { actions, reducer } = wishlistsSlice;
export const { addProductToWish, removeProductInWish } = actions;
export default reducer;