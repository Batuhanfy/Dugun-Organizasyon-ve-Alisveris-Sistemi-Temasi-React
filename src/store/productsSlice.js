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
    allProducts:[],
    filteredProducts:[],
    loading: "idle",
    error: null
  },
  reducers: {
    filterProductsByPrice: (state,action)=>{
      const { minPrice, maxPrice } = action.payload;
      state.filteredProducts = state.allProducts.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );
      
    }

  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProduct.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        })
}

});

// Reducer'ı export edin
export const {filterProductsByPrice} = productSlice.actions;
export default productSlice.reducer;
