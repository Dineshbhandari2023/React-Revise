import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <form className="flex justify-center" onSubmit={handleFormSubmit}>
      <input
        value={term}
        placeholder="Search Images..."
        className="w-2/4 md:w-3/5 lg:w-4/5 justify-center m-4 bg-gray-100 border h-7 border-black rounded-md p-5 "
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
