import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import searchApi from "../../components/hooks/Api";
import { createContext, useState } from "react";

// Create context
export const ImageContext = createContext();

const FourthApp = () => {
  const [searchImage, setSearchImage] = useState("cats");

  const unsplashApikey = "xPIk5Sw0rrbeKdwilT2FsYAd8S_P77zeAeM-1eyx1LE";
  const { response, isLoading, error, fetchData } = searchApi(
    `/search/photos?page=1&query=${searchImage}&client_id=${unsplashApikey}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <SearchBar />
      <ImageList />
    </ImageContext.Provider>
  );
};

export default FourthApp;
