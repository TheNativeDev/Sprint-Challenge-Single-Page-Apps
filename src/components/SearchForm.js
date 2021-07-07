import React, { useState, useEffect } from "react";

export default function SearchForm (props) {

  const {searchCallback} = props;
 
  const [characterSearch, setCharacterSearch] = useState('');
  
  const handleChange = e =>{
    setCharacterSearch(e.target.value);
  };

  useEffect(() =>{
    searchCallback(characterSearch);
  }, [characterSearch, searchCallback]);

  return (
    <section className="search-form">
      <label htmlFor="character-search-form">Character Search: </label> <input id="character-search-form" type="text" name="character_name" placeholder="Rick" onChange={handleChange}/>
    </section>
  );
}
