import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
      name: "Product",
      initialState: {
            products: [],
            error: null,
            loading: false,
      }
})

export default product.reducer;