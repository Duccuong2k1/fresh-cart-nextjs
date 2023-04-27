import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cart/cartSlice";
import wishlistsReducer from "./cart/wishlist";
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlists: wishlistsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
