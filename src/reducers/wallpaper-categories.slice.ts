import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WallpaperCategory } from '../shared/enums/wallpaper-category.enum';

const defaultCategories: WallpaperCategory[] = [
  WallpaperCategory.GradientTexture,
  WallpaperCategory.GroovyBohoTexture,
];

let initialWallpaperCategories: WallpaperCategory[];

try {
  const localData = localStorage.getItem('wallpaperCategories');
  initialWallpaperCategories = localData
    ? JSON.parse(localData)
    : defaultCategories;
} catch {
  initialWallpaperCategories = defaultCategories;
}

const initialState = {
  wallpaperCategories: initialWallpaperCategories,
};

const wallpaperCategoriesSlice = createSlice({
  name: 'wallpaperCategories',
  initialState,
  reducers: {
    addWallpaperCategory: (state, action: PayloadAction<WallpaperCategory>) => {
      if (!state.wallpaperCategories.includes(action.payload)) {
        state.wallpaperCategories.push(action.payload);
        localStorage.setItem(
          'wallpaperCategories',
          JSON.stringify(state.wallpaperCategories)
        );
      }
    },
    removeWallpaperCategory: (
      state,
      action: PayloadAction<WallpaperCategory>
    ) => {
      if (state.wallpaperCategories.length > 1) {
        state.wallpaperCategories = state.wallpaperCategories.filter(
          (category) => category !== action.payload
        );
        localStorage.setItem(
          'wallpaperCategories',
          JSON.stringify(state.wallpaperCategories)
        );
      }
    },
  },
});

export const { addWallpaperCategory, removeWallpaperCategory } =
  wallpaperCategoriesSlice.actions;
export default wallpaperCategoriesSlice.reducer;
