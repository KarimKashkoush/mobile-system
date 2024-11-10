import { configureStore } from "@reduxjs/toolkit";

import product from "./product";

const store = configureStore({
      reducer: {
            product,
      }
})

export default store;