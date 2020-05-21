import React, { useState, useEffect } from "react";

const AppConsumer = React.createContext();

const AppProvider = ({ children }) => {
  const [appStorage, setStorage] = useState({
    artists: [],
    artistID: "",
    albumID: "",
    favorites: {},
  });

  useEffect(() => {
    const artists = window.localStorage.getItem("artists");
    //  console.log(artists, "artistas del storage");
    const artistID = window.localStorage.getItem("artistID");
    //  console.log(artistID, "artistID del storage");
    const albumID = window.localStorage.getItem("albumID");
    console.log(albumID, "Accediendo a local storage AlbumID desde Context");
    
    if (artists) {
      setStorage((prevState) => ({
        ...prevState,
        artists: window.JSON.parse(artists),
      }));
    }

    if (artistID) {
      setStorage((prevState) => ({
        ...prevState,
        artistID: artistID,
      }));
    }

    if (albumID) {
      setStorage((prevState) => ({
        ...prevState,
        albumID: albumID,
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
