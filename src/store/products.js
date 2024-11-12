import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get products from db
export const getProducts = createAsyncThunk(
      'products/getProducts',
      async (_, thunkAPI) => {
            try {
                  const res = await fetch("https://mobsystm-default-rtdb.firebaseio.com/products.json");
                  if (!res.ok) {
                        throw new Error('Failed to fetch products');
                  }
                  const data = await res.json();
                  return data;
            } catch (error) {
                  return thunkAPI.rejectWithValue(error.message);
            }
      }
);

const productsSlice = createSlice({
      name: "products",
      initialState: {
            products: [],
            error: null,
            isLoading: false,
      },
      extraReducers: (builder) => {
            builder
                  .addCase(getProducts.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })

                  .addCase(getProducts.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.products = action.payload;
                        state.error = null;
                  })

                  .addCase(getProducts.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                        state.products = [];
                  });
      },
});

export default productsSlice.reducer;
