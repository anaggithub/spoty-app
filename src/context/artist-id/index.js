import { useContext } from "react";
import AppConsumer from "../app";

const UseArtistID = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setArtistID = (artistID) => {
    window.localStorage.setItem("artistID", artistID);
    setStorage((prevState) => ({ ...prevState, artistID }));
  };
  return {
    artistID: appStorage.artistID,
    setArtistID,
  };
};

export default UseArtistID;
