import { useContext } from "react";
import AppConsumer from "../app";

const UseAlbumID = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setAlbumID = (albumID) => {
    //  console.log("entro al set album id de storage")
    window.localStorage.setItem("albumID", albumID);
    setStorage((prevState) => ({ ...prevState, albumID }));
  };
  return {
    albumID: appStorage.albumID,
    setAlbumID,
  };
};

export default UseAlbumID;
