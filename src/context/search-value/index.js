import { useContext } from "react";
import AppConsumer from "../app";

const UseSearchValue = () => {
  const [appStorage, setStorage] = useContext(AppConsumer);

  const setSearchValue = (searchValue) => {
    window.localStorage.setItem("searchValue", searchValue);
    setStorage((prevState) => ({ ...prevState, searchValue }));
  };
  return {
    searchValue: appStorage.searchValue,
    setSearchValue,
  };
};

export default UseSearchValue;
