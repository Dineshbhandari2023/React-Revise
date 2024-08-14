import React, { useContext, useState } from "react";
import { ImageContext } from "./FourthApp";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };
  return (
    <div className="flex flex-col bg-gray-200 rounded-md m-3 shadow-lg shadow-blue-400 p-4">
      <h1 className="font-bold text-3xl font-serif justify-center text-center m-4">
        Find Images
      </h1>
      <form className="flex justify-center mb-4">
        <input
          value={searchValue}
          type="search"
          placeholder="Search Images..."
          className="w-2/4 md:w-3/5 lg:w-4/5 justify-center mb-2 bg-gray-100 border h-7 border-black rounded-l-md p-5 focus:shadow-md focus:shadow-blue-400"
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
        <button
          className="bg-blue-500 px-6 mb-2 text-white rounded-r-lg cursor-pointer focus:shadow-md focus:shadow-blue-400"
          onClick={handleButtonSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
