import React, { useContext } from "react";
import  Header  from "../Header/Header";
import  Menu  from "../Menu/Menu";
import  Footer  from "../Footer/Footer";
import {
  ThemeContext,
  ThemeList,
  ThemeProvider,
} from "../../contexts/ThemeContext";

const LayoutComponent = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const backgroundValue =
    theme === ThemeList.LIGHT ? "bg-white " : "bg-gray-700";

  return (
    <div className={`overflow-auto ${backgroundValue}`}>
      <div className="mx-4 my-3">
        <Header />
        <Menu />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export const Layout = ({ children }) => {
  return (
    <ThemeProvider startingTheme={ThemeList.DARK}>
      <LayoutComponent>{children}</LayoutComponent>
    </ThemeProvider>
  );
};
