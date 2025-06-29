// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme-slice";
import tempUnitReducer from "./slices/temp-unit-slice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    temp_unit: tempUnitReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
