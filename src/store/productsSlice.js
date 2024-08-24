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
    allProducts: [],
    filteredProducts: [],
    loading: "idle",
    sortOrder: '',
    error: null
  },
  reducers: {
    filterProductsByPrice: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.filteredProducts = state.allProducts.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );


    },
    kategorifiltresi: (state, action) => {
      const categoryName = action.payload;
      switch (categoryName) {
        case "Balloons":
          state.filteredProducts = state.allProducts.filter(product => product.category === "Balloons");
          break;
        case "Bouquets":
          state.filteredProducts = state.allProducts.filter(product => product.category === "Bouquets");
          break;
        case "DessertStands":
          state.filteredProducts = state.allProducts.filter(product => product.category === "Dessert Stands");
          break;
        case "FlowerDecor":
          state.filteredProducts = state.allProducts.filter(product => product.category === "Flower Decor");
          break;
        case "LightsCandles":
          state.filteredProducts = state.allProducts.filter(product => product.category === "Lights & Candles");
          break;
        case "SignsSignatures":
          state.filteredProducts = state.allProducts.filter(product => product.category === "Signs & Signatures");
          break;
        default:
          state.filteredProducts = state.allProducts;
          break;
      }
    },    
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    sortProducts(state) {
      const { sortOrder, items } = state;
      switch (sortOrder) {
        case 'popularity':
          state.filteredProducts = [...state.allProducts].sort((a, b) => b.popularity - a.popularity);
          break;
        case 'rating':
          state.filteredProducts = [...state.allProducts].sort((a, b) => b.rating - a.rating);
          break;
        case 'date':
          state.filteredProducts = [...state.allProducts].sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'price':
          state.filteredProducts = [...state.allProducts].sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          state.filteredProducts = [...state.allProducts].sort((a, b) => b.price - a.price);
          break;
        default:
          state.filteredProducts = [...state.allProducts];
          break;
      }
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
export const { filterProductsByPrice, kategorifiltresi,setSortOrder, sortProducts } = productSlice.actions;
export default productSlice.reducer;
