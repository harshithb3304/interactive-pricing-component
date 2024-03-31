import { createSlice } from "@reduxjs/toolkit";
export interface ToggleThemeState {
  value: "dark" | "light";
}

const initialState: ToggleThemeState = { value: "light" };
export const themeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.value === "dark") {
        state.value = "light";
      } else {
        state.value = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
