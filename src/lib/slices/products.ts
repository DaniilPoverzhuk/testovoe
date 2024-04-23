import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IProduct } from "@/types";
import { InitialState } from "./types";

import * as productService from "@/services/product";

export const getAll = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: AxiosError }
>("products/getAll", async (_, { rejectWithValue }) => {
  try {
    return await productService.getAll();
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue(error);
  }
});

const initialState: InitialState = {
  data: JSON.parse(localStorage.getItem("products")!) ?? [],
  status: null,
  error: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IProduct[]>) => {
      state.data = action.payload;
    },
    setDataByCategory: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (item) => item.category.toLowerCase() === action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;

        localStorage.setItem("products", JSON.stringify(action.payload));
      })
      .addCase(getAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as AxiosError;
      });
  },
});

export const { setData, setDataByCategory } = ProductsSlice.actions;

export default ProductsSlice.reducer;
