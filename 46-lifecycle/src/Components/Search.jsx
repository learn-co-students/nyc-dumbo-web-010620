import React from 'react';

const Search = (props) => {

  const handleChange = (e) => {
    props.thisIsTheFunctionThatWillChangeTheSearchTerm(e.target.value)
  }

  return (
    <div>
      <input type="text" name="searchTerm"
        value={props.searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
