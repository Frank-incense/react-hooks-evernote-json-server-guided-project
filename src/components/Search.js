import React, { useState } from "react";

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }
  return (
    <div className="filter">
      <input 
      id="search-bar" 
      type="text" 
      placeholder="Search Notes"
      value={searchTerm}
      onChange={handleChange} />
    </div>
  );
}

export default Search;
