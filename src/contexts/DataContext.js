import React from "react";
import { useRequest } from "../hooks/useRequest";

const DataContext = React.createContext({});

const DataProvider = ({ children, baseURL, route }) => {
  const state = useRequest(baseURL, route);
  
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
