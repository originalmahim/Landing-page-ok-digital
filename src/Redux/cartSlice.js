// cartSlice.js
import { createSlice, current } from "@reduxjs/toolkit";
const foodItems = [
  {
    id: 1,
    checked: true,
    title: "গাছ চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 360,
    priceInBd: "৩৬০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411071827_864466802353286_1798985628233004209_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_-K7JzHYGjwAX_CqnKT&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCGyJqvQFORraW4L-ffAcW_1vBUpJMEdPpF3R6Y1A4UVA&oe=65878ABC",
  },
  {
    id: 2,
    checked: false,
    title: "গাছ চুইঝাল",
    weight: "১ কেজি",
    price: 700,
    priceInBd: "৭০০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC",
  },
  {
    id: 3,
    checked: false,
    title: "এটো চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 360,
    priceInBd: "৩৬০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411131277_862384709228162_7122716054042689418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=fmJ3Tnb0OxcAX_-wxAy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAxQK-bUlQjxzzGriaDxYXa3Zq9QJ6mz6svJi2VIQP5Vw&oe=658846F7",
  },
  {
    id: 4,
    checked: false,
    title: "এটো চুইঝাল",
    weight: "১ কেজি",
    price: 700,
    priceInBd: "৭০০",
    quantity: 1,
    photo:
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/409009017_858145352985431_383209555235447952_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=F6KUTcIA6ZoAX8fspDM&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA_mfQ0HCEUFaiGXJ2wlnEanCo97b6vaHQW5uouTMp9MA&oe=6587B32D",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("foods"))
      ? JSON.parse(localStorage.getItem("foods"))
      : foodItems,
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
      let foodData = JSON.stringify(current(state.items));
      localStorage.setItem("foods", foodData);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = parseInt(quantity);
      }
      let foodData = JSON.stringify(current(state.items));
      localStorage.setItem("foods", foodData);
    },
    // removeItem: (state, action) => {
    //   const id = action.payload;
    //   const existingItem = state.items.find((item) => item.id === id);

    //   if (existingItem.checked) {
    //     existingItem.checked = false;
    //   } else {
    //     existingItem.checked = true;
    //   }
    //   let foodData = JSON.stringify(current(state.items));
    //   localStorage.setItem("foods", foodData);
    // },
  },
});

export const { addItem, updateQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
