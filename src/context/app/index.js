import React, { useState, useEffect } from "react";

const AppConsumer = React.createContext();

const AppProvider = ({ children }) => {
  const [appStorage, setStorage] = useState({
    artists: [],
    artistID: "",
    favorites: {},
  });

  useEffect(() => {
    const lastArtists = window.localStorage.getItem("artists");
//console.log(lastArtists, "useEffect del storage");
    const lastArtist = window.localStorage.getItem("artistID");
    console.log(lastArtist, "useEffect del storage");

    if (lastArtists)
      setStorage((prevState) => ({
        ...prevState,
        artists: window.JSON.parse(lastArtists),
      }));

    if (lastArtist) {
      setStorage((prevState) => ({
        ...prevState,
        artistID: lastArtist,
      }));
    }
  }, []);

  return (
    <AppConsumer.Provider value={[appStorage, setStorage]}>
      {children}
    </AppConsumer.Provider>
  );
};

export default AppConsumer;
export { AppProvider };
