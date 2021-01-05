import React, { useContext } from "react";
import { ThemeContext, ThemeList } from "../../contexts/ThemeContext";

const Homepage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === ThemeList.DARK ? "text-white" : "text-black"}>
      <div className="m-6">
        <p>
          Silicon Valley Code Camp is a two-day technical conference in Silicon
          Valley where developers learn from developers focusing on open source,
          the latest enterprise-focused technologies, software branding, legal
          issues around software as well as other topics developers are
          interested in hearing about such as career building and more. topics
          developers are interested in hearing about.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
