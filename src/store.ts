import { configureStore } from '@reduxjs/toolkit';
import wallpaperCategoriesSlice from './reducers/wallpaper-categories.slice';
import wallpaperRefreshTimeSlice from './reducers/wallpaper-refresh-time.slice';

export const store = configureStore({
  reducer: {
    wallpaperCategories: wallpaperCategoriesSlice,
    wallpaperRefreshTime: wallpaperRefreshTimeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
