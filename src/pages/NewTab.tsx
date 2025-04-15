import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getRefreshTimeInMilliseconds } from '../shared/enums/wallpaper-refresh-time.enum';
import { getWallpapersFromListOfCategories } from '../shared/utils/wallpaper.utils';
import { RootState } from '../store';
import './styles/newTab.css';

const FADE_DURATION = 1000;

const NewTab: React.FC = () => {
  const wallpaperCategories = useSelector(
    (state: RootState) => state.wallpaperCategories.wallpaperCategories
  );
  const refreshTime = useSelector(
    (state: RootState) => state.wallpaperRefreshTime.wallpaperRefreshTime
  );

  const [currentWallpaper, setCurrentWallpaper] = useState<string>('');
  const [nextWallpaper, setNextWallpaper] = useState<string>('');
  const [wallpapers, setWallpapers] = useState<string[]>([]);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    if (wallpaperCategories.length > 0) {
      const defaultWallpapers = getWallpapersFromListOfCategories([
        wallpaperCategories[0],
      ]);
      if (defaultWallpapers.length > 0) {
        setCurrentWallpaper(defaultWallpapers[0]);
      }
      setTimeout(() => {
        const urls = getWallpapersFromListOfCategories(wallpaperCategories);
        setWallpapers(urls);
        if (urls.length > 0) {
          setCurrentWallpaper(urls[0]);
        }
      }, 0);
    }
  }, [wallpaperCategories]);

  useEffect(() => {
    if (wallpapers.length === 0) return;
    const refreshMs = getRefreshTimeInMilliseconds(refreshTime);
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * wallpapers.length);
      const newWallpaper = wallpapers[randomIndex];
      if (newWallpaper !== currentWallpaper) {
        setNextWallpaper(newWallpaper);
        setFade(true);
      }
    }, refreshMs);
    return () => clearInterval(intervalId);
  }, [refreshTime, wallpapers, currentWallpaper]);

  useEffect(() => {
    if (fade && nextWallpaper) {
      const timeoutId = setTimeout(() => {
        setCurrentWallpaper(nextWallpaper);
        setNextWallpaper('');
        setFade(false);
      }, FADE_DURATION);
      return () => clearTimeout(timeoutId);
    }
  }, [fade, nextWallpaper]);

  return (
    <div className="newtab-container">
      <div
        className="background-layer"
        style={{
          backgroundImage: `url(${currentWallpaper})`,
        }}
      />
      {fade && nextWallpaper && (
        <div
          className="overlay-layer fade-in"
          style={{
            backgroundImage: `url(${nextWallpaper})`,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        />
      )}
      <div className="newtab-overlay">
        <Dashboard />
      </div>
    </div>
  );
};

export default NewTab;
