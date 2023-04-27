import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from './../../lib/res/product.d';

export interface CartState extends ProductType {
    cart: {
        id: number;
        quantity: number;
    }[];
}



// Get cart items from local storage, if available
const getCartItemsFromLocalStorage = () => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            return JSON.parse(cartItems);
        }
    }
    return [];
}

const initialState: CartState = {
    cart: getCartItemsFromLocalStorage(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });

            }
        },
        inCrementQuantity(state, action) {
            const product = state.cart.find((item) => item.id === action.payload);
            if (typeof product !== "undefined" && product.quantity < 10) {
                product.quantity++
            } else {
                alert("You can not access more than 10")
            }
        },
        inDecrementQuantity(state, action) {
            const product: any = state.cart.find((item) => item.id === action.payload);
            if (typeof product !== "undefined" && product.quantity === 1) {
                product.quantity = 1
            } else {
                product.quantity--

            }
        },

        removeItemCart(state, action) {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => {
                const cartActionTypes = [addToCart.type, inCrementQuantity.type, inDecrementQuantity.type, removeItemCart.type];
                return cartActionTypes.includes(action.type);
            },
            (state) => {
                if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
                    localStorage.setItem('cartItems', JSON.stringify(state.cart));
                }
            }
        );
    },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeItemCart, inCrementQuantity, inDecrementQuantity } = actions;
export default reducer;