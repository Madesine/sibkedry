import { createSlice } from "@reduxjs/toolkit";

export const products = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		setProducts: (state, action) => {
			return [...action.payload];
		},
	},
});

export const { setProducts } = products.actions;
export default products.reducer;
