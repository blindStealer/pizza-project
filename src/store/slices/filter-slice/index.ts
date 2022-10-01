import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISort {
  sortProperty: string;
  sortName: string;
}

interface IFilterSliceState {
  selectCategory: number;
  sort: ISort;
}

const initialState: IFilterSliceState = {
  selectCategory: 0,
  sort: {
    sortProperty: "",
    sortName: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectCategory: (state, action: PayloadAction<number>) => {
      state.selectCategory = action.payload;
    },
    setSort: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { setSelectCategory, setSort } = filterSlice.actions;
