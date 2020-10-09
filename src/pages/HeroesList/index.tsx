import React, { useState, useEffect } from 'react';

import HeroItem, { Hero } from '../../components/HeroItem';

import { CharactersApi } from '../../services/marvel-api';

import './styles.css';

function HeroesList() {
  const [heroes, setHeroes] = useState([]);

  async function getCharacters() {

    const response = await CharactersApi.getCharacters();
    const { total, count, results } = response.data;

    setHeroes(results);
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <div id="page-heroes-list" className="container">
      <main>
        {heroes.map((hero: Hero) => {
          return <HeroItem key={hero.id} hero={hero} />;
        })}
      </main>
    </div>
  )
}

export default HeroesList;