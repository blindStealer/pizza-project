import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterSliceState {
  selectCategory: number;
}

const initialState: IFilterSliceState = {
  selectCategory: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectCategory: (state, action: PayloadAction<number>) => {
      state.selectCategory = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { setSelectCategory } = filterSlice.actions;
