import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../auth/firebase"

import moment from "moment";
const now = moment();

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

// insert product to db
export const insertProduct = createAsyncThunk('products/insertProduct', async (productData, thunkAPI) => {
      try {
            const res = await fetch("https://mobsystm-default-rtdb.firebaseio.com/products.json", {
                  method: 'POST',
                  body: JSON.stringify(productData),
                  headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                  },
            });
            const data = await res.json();
            return data;
      } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
      }
})

// delete product from db
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (product, thunkAPI) => {
      try {
            await fetch(`https://mobsystm-default-rtdb.firebaseio.com/products/${product}.json`, {
                  method: 'DELETE',
            })
            return product;
      } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
      }
}
)

// Sale products from db 
export const saleProduct = createAsyncThunk('products/saleProduct', async (productId, thunkAPI) => {
      try {
            // الخطوة 1: جلب بيانات المنتج المبيع
            const res = await fetch(`https://mobsystm-default-rtdb.firebaseio.com/products/${productId}.json`);
            if (!res.ok) {
                  throw new Error('Failed to fetch product');
            }
            const productData = await res.json();

            // إضافة الطابع الزمني (التاريخ الحالي)
            const saleData = {
                  ...productData,
                  soldAt: now.format("DD/MM/YYYY - HH:mm"),
                  userName : auth.currentUser.displayName,
            };

            // الخطوة 2: إضافته إلى قائمة المبيعات
            await fetch("https://mobsystm-default-rtdb.firebaseio.com/sales.json", {
                  method: 'POST',
                  body: JSON.stringify(saleData),
                  headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                  },
            });

            // الخطوة 3: حذف المنتج من قائمة المنتجات
            await fetch(`https://mobsystm-default-rtdb.firebaseio.com/products/${productId}.json`, {
                  method: 'DELETE',
            });

            // إعادة المنتج المبيع للتحديث في الـ state
            return { id: productId, saleData };
      } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
      }
});



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
                        state.products = action.payload ? Object.entries(action.payload).map(([id, product]) => ({
                              id,
                              ...product,
                        })) : [];
                        state.error = null;
                  })
                  .addCase(getProducts.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                        state.products = [];
                  });

            builder
                  .addCase(insertProduct.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(insertProduct.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const newProduct = {
                              id: action.payload.name, // Firebase ID
                              ...action.meta.arg, // البيانات المرسلة
                        };
                        state.products.push(newProduct);
                        state.error = null;
                  })
                  .addCase(insertProduct.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                        console.log(action.payload)
                  });

            builder
                  .addCase(deleteProduct.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(deleteProduct.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.products = state.products.filter((product) => product.id !== action.payload);
                        state.error = null;
                        console.log(state.products)
                  })
                  .addCase(deleteProduct.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                        console.log(action.payload)
                  });

            builder
                  .addCase(saleProduct.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(saleProduct.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const { id } = action.payload;
                        state.products = state.products.filter((product) => product.id !== id); // إزالة المنتج المبيع
                        state.error = null;
                  })
                  .addCase(saleProduct.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                        console.log(action.payload);
                  });

      },
});


export default productsSlice.reducer;
