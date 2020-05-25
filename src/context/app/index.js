import React, { useState } from "react";

const AppConsumer = React.createContext();

const AppProvider = ({ children }) => {
  const [appStorage, setStorage] = useState({
    favorites: JSON.parse(localStorage.getItem("favorites") || '[]'),
    artists: JSON.parse(localStorage.getItem("artists") || '[]'),
    artistID: localStorage.getItem("artistID") || "",
    albumID: localStorage.getItem("albumID") || "",
  });

  return (
    <AppConsumer.Provider value={[appStorage, setStorage]}>
      {children}
    </AppConsumer.Provider>
  );
};

export default AppConsumer;
export { AppProvider };
