// store/themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark";

const initialState: ThemeState =
  (typeof window !== "undefined" &&
    (localStorage.getItem("theme") as ThemeState)) ||
  "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    },
    setTheme: (_, action) => {
      const newTheme = action.payload;
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
