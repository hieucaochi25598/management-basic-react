import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductSliceState } from '../types/model/product/ProductSliceStateModel';

const initialState: IProductSliceState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // increment: (state) => {
        //   state.value += 1
        // },
        // decrement: (state) => {
        //   state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //   state.value += action.payload
        // },
    },
});

// export const { decrement } = counterSlice.actions

export default productSlice.reducer;
