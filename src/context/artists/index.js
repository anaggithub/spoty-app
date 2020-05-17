import { useContext } from "react";
import AppConsumer from "../app";

const UseArtists = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setArtists = (artists) => {
    window.localStorage.setItem("myArtists", JSON.stringify(artists));
    const artistsLocalStorage = window.localStorage.getItem("myArtists");
    console.log(artistsLocalStorage);
    setStorage((prevState) => ({ ...prevState, artists }));
  };
  return {
    artists: appStorage.artists,
    setArtists,
  };
};

export default UseArtists;
