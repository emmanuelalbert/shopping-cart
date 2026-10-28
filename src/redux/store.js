// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

// This is the default export from cartSlice.js (the reducer)
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;



/*The store is the single object that holds all shared state. 
configureStore() creates it. You tell it which slices (reducers) to include.*/