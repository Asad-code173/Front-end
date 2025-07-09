import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
// import { authApi } from "./api/authApi";
// import authSlice from "./authSlice"




const store = configureStore({
    reducer:{
        cart: CartSlice,
        // auth:authSlice,
        // [authApi.reducerPath]:authApi.reducer,
    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware)

})
export default store