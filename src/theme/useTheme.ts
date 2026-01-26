import { useContext } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);
  const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

  const toggleTheme = () => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  
  return {theme, toggleTheme}
}