import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeContext = React.createContext({});

const ThemeList = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeProvider = ({ children, startingTheme }) => {
  const state = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, ThemeList };
