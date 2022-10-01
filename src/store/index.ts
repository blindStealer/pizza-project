import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizza-slice";
import filterSlice from "./slices/filter-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
