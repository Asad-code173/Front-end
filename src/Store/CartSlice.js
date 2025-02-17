import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    loading: false,
    subtotal: 0,
    tax: 0,
    shippingCharges: 0,
    discount: 0,
    total: 0
    // item:CardGrid,



}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
           state.loading = true;
           const exsistingitem = state.cart.findIndex(item => item.id === action.payload.id);
           if(exsistingitem !==-1){
            state.cart[exsistingitem] = action.payload;
           }
           else{
            state.cart.push(action.payload);
           }
            

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        PriceCalculation: (state) => {
            const subtotal = state.cart.reduce((total, item) =>
                total + item.price * item.quantity, 0
            )
            state.subtotal = subtotal;
            state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
            state.tax= Math.round(state.subtotal*0.18)
            state.total = state.subtotal+state.tax+state.shippingCharges-state.discount;

        },
        setdiscount:(state,action)=>{
            state.discount = action.payload
        },
        resetCart: () => initialState,

    }

})

export const { addToCart, removeFromCart,setdiscount,PriceCalculation } = CartSlice.actions;

export default CartSlice.reducer