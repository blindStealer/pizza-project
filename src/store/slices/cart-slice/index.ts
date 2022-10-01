import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  id: number | string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
}

interface ICartState {
  cart: ICartItem[];
  totalCount: number;
  totalPrice: number;
}

const initialState: ICartState = {
  cart: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemsInCart: (state, action: PayloadAction<ICartItem>) => {
      const findItem: ICartItem | undefined = state.cart.find(
        (obj: ICartItem) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.cart.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export default cartSlice.reducer;
export const {
  setItemsInCart,
  clearCart,
  removeItem,
  setTotalCount,
  setTotalPrice,
} = cartSlice.actions;
