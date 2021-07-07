import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {
      setCharacters(response.data);
    }).catch(error => console.log(`Error: ${error}`));

  }, []);

  const searchCallback = value => {
    setFilter(value);
  };

  if (!characters.results) {
    return (
      <div>
        <h2>Fetching required data</h2>
        <p>This should only take a moment to fetch the data.</p>
      </div>
    );
  }

  return (

    <section className="character-list">
      <SearchForm searchCallback={searchCallback} />
      <h2>Characters</h2>
      <Container>
        <Row>
          {characters.results.map((character, index) => {
            if (character.name.includes(filter)) {
              return <CharacterCard key = { index } {...character} />;
            }else{
              return null;
            }
      })}
        </Row>
      </Container>
    </section>
  );
}