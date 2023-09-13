import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import cartSlice from './cartSlice';
import orderSlice from './orderSlice';
import productSlice from './productSlice';
import userSlice from './userSlice';
const store = configureStore({
    reducer: {
        product:productSlice,
        user:userSlice,
        cart:cartSlice,
        order:orderSlice,
        admin:adminSlice
    },
});

export default store;