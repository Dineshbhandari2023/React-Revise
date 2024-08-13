import React from "react";

const SearchBar = ({ onSubmit }) => {
  return (
    <div className="flex flex-col bg-gray-200 rounded-md m-3 shadow-lg shadow-blue-400 p-4">
      <h1 className="font-bold text-3xl font-serif justify-center text-center m-4">
        Find Images
      </h1>
      <form className="flex justify-center mb-4">
        <input
          type="search"
          placeholder="Search Images..."
          className="w-2/4 md:w-3/5 lg:w-4/5 justify-center mb-2 bg-gray-100 border h-7 border-black rounded-l-md p-5 focus:shadow-md focus:shadow-blue-400"
        />
        <button className="bg-blue-500 px-6 mb-2 text-white rounded-r-lg cursor-pointer focus:shadow-md focus:shadow-blue-400">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
