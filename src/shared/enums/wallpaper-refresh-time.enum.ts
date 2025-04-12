export enum WallpaperRefreshTime {
  TenSeconds = '10 seconds',
  ThirtySeconds = '30 seconds',
  OneMinute = '1 minute',
  FiveMinutes = '5 minutes',
  TenMinutes = '10 minutes',
  FifteenMinutes = '15 minutes',
  ThirtyMinutes = '30 minutes',
  OneHour = '1 hour',
  TwoHours = '2 hours',
  FourHours = '4 hours',
  EightHours = '8 hours',
  TwelveHours = '12 hours',
  TwentyFourHours = '24 hours',
}

export function getRefreshTimeInMilliseconds(
  refreshTime: WallpaperRefreshTime
): number {
  switch (refreshTime) {
    case WallpaperRefreshTime.TenSeconds:
      return 10 * 1000;
    case WallpaperRefreshTime.ThirtySeconds:
      return 30 * 1000;
    case WallpaperRefreshTime.OneMinute:
      return 60 * 1000;
    case WallpaperRefreshTime.FiveMinutes:
      return 5 * 60 * 1000;
    case WallpaperRefreshTime.TenMinutes:
      return 10 * 60 * 1000;
    case WallpaperRefreshTime.FifteenMinutes:
      return 15 * 60 * 1000;
    case WallpaperRefreshTime.ThirtyMinutes:
      return 30 * 60 * 1000;
    case WallpaperRefreshTime.OneHour:
      return 60 * 60 * 1000;
    case WallpaperRefreshTime.TwoHours:
      return 2 * 60 * 60 * 1000;
    case WallpaperRefreshTime.FourHours:
      return 4 * 60 * 60 * 1000;
    case WallpaperRefreshTime.EightHours:
      return 8 * 60 * 60 * 1000;
    case WallpaperRefreshTime.TwelveHours:
      return 12 * 60 * 60 * 1000;
    case WallpaperRefreshTime.TwentyFourHours:
      return 24 * 60 * 60 * 1000;
    default:
      throw new Error('Invalid refresh time');
  }
}
