import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IPizza {
  id: number | string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

enum Status {
  PENDING = "pending",
  SUCCESS = "success",
  REJECTED = "rejected",
}

interface IPizzaItems {
  items: IPizza[];
  status: Status;
}

const initialState: IPizzaItems = {
  items: [],
  status: Status.PENDING,
};

export const fetchPizzas = createAsyncThunk<IPizza[]>(
  "pizza/fetchPizzas",
  async (props: any) => {
    const { selectCategory, sort } = props;

    console.log("selectCategory", selectCategory, "sort", sort);
    const categoryQuery = `${
      selectCategory > 0 && `category=${selectCategory}`
    }`;
    const sortQuery = `sortBy=${sort.sortProperty}&order=desc`;

    const response = await axios.get<IPizza[]>(
      `https://63342ee790a73d0fede8e34e.mockapi.io/items?${categoryQuery}&${sortQuery}`
    );

    return response.data as IPizza[];
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.PENDING;
      state.items = [];
    });

    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<IPizza[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.items = [];
    });
  },
});

export default pizzaSlice.reducer;
