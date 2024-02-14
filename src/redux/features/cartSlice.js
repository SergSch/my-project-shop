import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.findIndex((elem) => elem.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((elem) =>
          elem.id === action.payload.id
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem
        );
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((elem) => elem.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
