import { useContext } from "react";
import AppConsumer from "../app";

const UseArtists = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setArtists = (artists) => {
    window.localStorage.setItem("artists", JSON.stringify(artists));
    setStorage((prevState) => ({ ...prevState, artists }));
  };
  return {
    artists: appStorage.artists,
    setArtists,
  };
};

export default UseArtists;
