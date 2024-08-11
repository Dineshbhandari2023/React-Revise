import React from "react";
import SearchBar from "./SearchBar";
import searchApi from "./api";

const FourthApp = () => {
  const handleSubmit = async (term) => {
    const result = await searchApi(term);
    console.log(result);
  };
  return <SearchBar onSubmit={handleSubmit} />;
};

export default FourthApp;
