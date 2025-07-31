import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: (localStorage.getItem('theme') as Theme) || 'theme1',
};

document.documentElement.className = initialState.theme;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      document.documentElement.className = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;