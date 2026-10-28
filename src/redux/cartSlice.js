// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 1. The starting state: an empty cart
const initialState = [];

// 2. Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // ADD: add a new product, or increase quantity if it's already in the cart
    addToCart: (state, action) => {
      const product = action.payload;

      // Look for this product in the cart
      const existingItem = state.find((item) => item.id === product.id);

      if (existingItem) {
        // Already in cart -> just increase quantity
        existingItem.quantity += 1;
      } else {
        // Not in cart -> add it with quantity 1
        state.push({ ...product, quantity: 1 });
      }
    },

    // INCREASE: +1 for the product whose id was sent
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
      }
    },

    // DECREASE: -1, but never go below 1
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // REMOVE: delete the product from the cart completely
    removeFromCart: (state, action) => {
      const id = action.payload;
      // Returning a value REPLACES the whole state
      return state.filter((item) => item.id !== id);
    },

    // CLEAR: empty the cart
    clearCart: () => {
      return [];
    },
  },
});

// 3. Export the auto-generated action creators (components will use these)
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// 4. Export the reducer (store.js will use this)
export default cartSlice.reducer;

/*
name	        A label for this slice ("cart")
initialState	What the state looks like at the start
reducers	    Functions that describe each way the state can change
*/