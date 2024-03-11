import React, { useRef } from "react";
// Import createSearchParams
// Import useNavigate
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  // get navigate function
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value,
    };

    // use createSearchParams
    const queryStr = createSearchParams(searchQuery);

    // imperatively redirect with useNavigate() returned function
    navigate({
      pathname: "/searchpage",
      search: `?${queryStr}`,
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
