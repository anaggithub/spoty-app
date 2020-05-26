import { useContext } from "react";
import AppConsumer from "../app";

const UseSearchError = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setSearchError = (searchError) => {
   setStorage((prevState) => ({ ...prevState, searchError }));
  };
  return {
    searchError: appStorage.searchError,
    setSearchError,
  };
};

const UseSearchErrorMessage = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setSearchErrorMessage = (searchErrorMessage) => {
    setStorage((prevState) => ({ ...prevState, searchErrorMessage }));
  };
  return {
    searchErrorMessage: appStorage.searchErrorMessage,
    setSearchErrorMessage,
  };
};

export { UseSearchError, UseSearchErrorMessage}

