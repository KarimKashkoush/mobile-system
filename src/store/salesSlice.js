import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSales = createAsyncThunk('sales/getSales', async (_, thunkAPI) => {
      try {
            const res = await fetch("https://mobsystm-default-rtdb.firebaseio.com/sales.json");
            if (!res.ok) {
                  throw new Error('Failed to fetch sales');
            }
            const data = await res.json();
            return data
                  ? Object.entries(data).map(([id, sale]) => ({
                        id,
                        ...sale,
                  }))
                  : [];
      } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
      }
});

const salesSlice = createSlice({
      name: "sales",
      initialState: {
            sales: [], 
            isLoading: false,
            error: null,
      },
      reducers: {},
      extraReducers: (builder) => {
            builder
                  .addCase(getSales.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getSales.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.sales = action.payload;
                        state.error = null;
                  })
                  .addCase(getSales.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  });
      },
});

export default salesSlice.reducer;
