import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WallpaperRefreshTime } from '../shared/enums/wallpaper-refresh-time.enum';

const defaultRefreshTime: WallpaperRefreshTime =
  WallpaperRefreshTime.TenSeconds;

let initialRefreshTime: WallpaperRefreshTime;

try {
  const localData = localStorage.getItem('wallpaperRefreshTime');
  initialRefreshTime = localData
    ? (localData as WallpaperRefreshTime)
    : defaultRefreshTime;
} catch {
  initialRefreshTime = defaultRefreshTime;
}

const initialState = {
  wallpaperRefreshTime: initialRefreshTime,
};

const wallpaperRefreshTimeSlice = createSlice({
  name: 'wallpaperRefreshTime',
  initialState,
  reducers: {
    updateRefreshTime: (state, action: PayloadAction<WallpaperRefreshTime>) => {
      state.wallpaperRefreshTime = action.payload;
      localStorage.setItem('wallpaperRefreshTime', action.payload);
    },
  },
});

export const { updateRefreshTime } = wallpaperRefreshTimeSlice.actions;
export default wallpaperRefreshTimeSlice.reducer;
