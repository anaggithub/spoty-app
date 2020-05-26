import React, { useState } from "react";

const AppConsumer = React.createContext();

const AppProvider = ({ children }) => {
  const [appStorage, setStorage] = useState({
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    artistID: localStorage.getItem("artistID") || "",
    albumID: localStorage.getItem("albumID") || "",
    searchValue: localStorage.getItem("searchValue") || "",
    searchError: false,
    searchErrorMessage: ""
  });

  return (
    <AppConsumer.Provider value={[appStorage, setStorage]}>
      {children}
    </AppConsumer.Provider>
  );
};

export default AppConsumer;
export { AppProvider };
