import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-end items-center pb-4 pt-0">
      <label
        htmlFor="search"
        className="mr-2 text-14 text-gray-700 font-medium"
      >
        Search:
      </label>
      <div className="relative">
        <input
          id="search"
          type="text"
          placeholder="Type to search..."
          className="w-full px-2 text-14 py-1.5 pr-10 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-gray66 focus:ring-1 focus:ring-blue-500 transition"
        />
      </div>
    </div>
  );
};

export default SearchBar;
