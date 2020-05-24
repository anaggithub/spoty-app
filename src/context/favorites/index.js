import { useContext } from "react";
import AppConsumer from "../app";

const UseFavorites = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setFavorites = (favorites) => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
    setStorage((prevState) => ({ ...prevState, favorites }));
  };

  return {
    favorites: appStorage.favorites,
    setFavorites,
  };
};

export default UseFavorites;
