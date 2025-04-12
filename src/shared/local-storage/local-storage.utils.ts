import { WallpaperCategory } from '../enums/wallpaper-category.enum';
import * as LocalStorageConstants from './local-storage.constants';

export const LocalStorageUtils = {
  getWallpaperCategories: () => {
    const localData = localStorage.getItem(
      LocalStorageConstants.WALLPAPER_CATEGORIES_KEY
    );
    return localData ? JSON.parse(localData) : [];
  },

  setWallpaperCategories: (categories: WallpaperCategory[]) => {
    localStorage.setItem(
      LocalStorageConstants.WALLPAPER_CATEGORIES_KEY,
      JSON.stringify(categories)
    );
  },

  clearWallpaperCategories: () => {
    localStorage.removeItem(LocalStorageConstants.WALLPAPER_CATEGORIES_KEY);
  },

  getWallpaperRefreshTime: () => {
    const localData = localStorage.getItem(
      LocalStorageConstants.WALLPAPER_REFRESH_TIME_KEY
    );
    return localData ? JSON.parse(localData) : null;
  },

  setWallpaperRefreshTime: (time: string) => {
    localStorage.setItem(
      LocalStorageConstants.WALLPAPER_REFRESH_TIME_KEY,
      JSON.stringify(time)
    );
  },

  clearWallpaperRefreshTime: () => {
    localStorage.removeItem(LocalStorageConstants.WALLPAPER_REFRESH_TIME_KEY);
  },
};
