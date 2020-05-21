import React, { useState, useEffect } from "react";

const AppConsumer = React.createContext();

const AppProvider = ({ children }) => {
  const [appStorage, setStorage] = useState({
    artists: [],
    artistID: "",
    favorites: {},
  });

  useEffect(() => {
    const artists = window.localStorage.getItem("artists");
  //  console.log(artists, "artistas del storage");
    const artistID = window.localStorage.getItem("artistID");
  //  console.log(artistID, "artistID del storage");

    if (artistID) {
      setStorage((prevState) => ({
        ...prevState,
        artistID: artistID,
      }));
    }
    
    if (artists)
      setStorage((prevState) => ({
        ...prevState,
        artists: window.JSON.parse(artists),
      }));
  }, []);

  return (
    <AppConsumer.Provider value={[appStorage, setStorage]}>
      {children}
    </AppConsumer.Provider>
  );
};

export default AppConsumer;
export { AppProvider };
