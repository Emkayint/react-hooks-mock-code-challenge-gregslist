import React from "react";
import { useState } from "react";

function Search({ onFilter }) {
  const [filterBy, setfilterBy] = useState('all')

  function handleSubmit(e) {
    e.preventDefault()
    onFilter(filterBy)  
  }

  return (
    <form className="searchbar" onSubmit={ handleSubmit }>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={filterBy}
        onChange={(e) => setfilterBy(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

// export  { filterWith };
export default Search;
