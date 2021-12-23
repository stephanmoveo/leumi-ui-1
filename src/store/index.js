import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    dataReducer,
  },
});
