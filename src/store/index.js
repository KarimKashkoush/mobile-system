import { configureStore } from "@reduxjs/toolkit";

import products from "./products";
import salesSlice from "./salesSlice";

const store = configureStore({
      reducer: {
            products,
            salesSlice,
      },
});

export default store;
