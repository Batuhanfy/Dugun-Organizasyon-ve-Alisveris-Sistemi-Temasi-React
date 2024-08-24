import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get("/data.json");
    return response.data.products;
  }
);

// productSlice oluşturun
const productSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    allProduct:[],
    filteredProduct:[],
    loading: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchProduct.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.allProduct = action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        })
}

});

// Reducer'ı export edin
export default productSlice.reducer;
