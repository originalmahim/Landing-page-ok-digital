// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const foodItems = [
  {
    id: 1,
    checked: true,
    title: "Excell Templates Bundle",
    price: 149,
    priceInBd: "১৪৯",
    quantity: 1,
    photo:
      "https://cdn.pixabay.com/photo/2023/06/01/12/02/excel-logo-8033473_960_720.png",
    
  }
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: foodItems,
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.checked) {
        existingItem.checked = false;
      } else {
        existingItem.checked = true;
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = parseInt(quantity);
      }
    },
  },
});

export const { addItem, updateQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
