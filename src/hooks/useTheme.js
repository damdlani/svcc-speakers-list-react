import { useState } from "react";
import { ThemeList } from "../contexts/ThemeContext";

export const useTheme = (startingTheme) => {
  const [theme, setTheme] = useState(startingTheme);

  return {
    theme: theme,
    toggleTheme: () => {
      if (theme === ThemeList.LIGHT) {
        setTheme(ThemeList.DARK);
      } else {
        setTheme(ThemeList.LIGHT);
      }
    },
  };
};
