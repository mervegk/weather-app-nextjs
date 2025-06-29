import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeMode, ThemeState } from "@/types/context/theme";

const initialState: ThemeState = {
  value: {
    theme: "light"
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      const newTheme = action.payload;
      state.value.theme = newTheme;
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    },
    initializeTheme: (state) => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme") as ThemeMode;
        if (savedTheme === "light" || savedTheme === "dark") {
          state.value.theme = savedTheme;
          document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
      }
    },
  },
});

export const { setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;