import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const location = useLocation();

  const [searchedItem] = useSearchParams(location.search);
  const searchedTerm = searchedItem.get("results");

  return (
    <div
      className={`dark:bg-[#0f0f0f] w-full text-white overflow-hidden ${
        isMenuOpen ? "md:ml-48 lg:ml-60" : "ml-0 md:ml-[94px]"
      }`}
    >
      <h1>SearchPage</h1>
      <h2>You Searched for : {searchedTerm} </h2>
    </div>
  );
};

export default SearchPage;
