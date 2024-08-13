import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import searchApi from "../../components/server/Api";
import { createContext } from "react";

// Create context
export const ImageContext = createContext();

const FourthApp = () => {
  const { response, isLoading, error, fetchData } = searchApi();

  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <SearchBar />
      <ImageList />
    </ImageContext.Provider>
  );
};

export default FourthApp;
