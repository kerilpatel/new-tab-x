import { WALLPAPER_ASSETS } from '../constants/wallpaper.constants';
import { WallpaperCategory } from '../enums/wallpaper-category.enum';
import { shuffleArray } from './array.utils';

/**
 * Given a list of WallpaperCategory items, this function:
 * 1. Converts each category to a key (lowercase, no spaces).
 * 2. Retrieves the corresponding list of imported wallpaper URLs from the constants file.
 * 3. Combines and shuffles the list before returning it.
 *
 * @param listOfCategories - Array of WallpaperCategory values.
 * @returns A randomized array of wallpaper URL strings.
 */
export const getWallpapersFromListOfCategories = (
  listOfCategories: WallpaperCategory[]
): string[] => {
  let wallpaperUrls: string[] = [];

  listOfCategories.forEach((category) => {
    const key = category.toLowerCase().replace(/\s+/g, '');
    if (WALLPAPER_ASSETS[key]) {
      wallpaperUrls = wallpaperUrls.concat(WALLPAPER_ASSETS[key]);
    }
  });

  return shuffleArray(wallpaperUrls);
};
