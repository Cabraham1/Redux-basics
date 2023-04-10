import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const newCart = state.cartItems.filter((item) => item.id !== id);
      state.cartItems = newCart;
    },
    increase: (state, { payload }) => {
      const newCart = state.cartItems.map((item) => {
        if (item.id === payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      state.cartItems = newCart;
    },
    decrease: (state, { payload }) => {
      const newCart = state.cartItems.map((item) => {
        if (item.id === payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      state.cartItems = newCart;
    },
    calculateTotal: (state) => {
      const { cartItems } = state;
      let { total, amount } = state;
      total = cartItems.reduce((acc, curr) => {
        return (acc += curr.price * curr.amount);
      }, 0);
      amount = cartItems.reduce((acc, curr) => {
        return (acc += curr.amount);
      }, 0);
      state.total = parseFloat(total.toFixed(2));
      state.amount = amount;
    },
  }
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
