import React, { useState, useEffect } from 'react';

import HeroItem, { Hero } from '../../components/HeroItem';

import { CharactersApi } from '../../services/marvel-api';

import logoImage from '../../assets/images/logo/Group.png';


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
      {/* TODO: create header component */}
      <header className="page-header">
        <figure>
          <img src={logoImage} alt="Marvel Search Heros" />
        </figure>
        <h1 className="page-title">EXPLORE O UNIVERSO</h1>
        <p><strong className="page-info">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</strong></p>
      </header>
      <main>
        {heroes.map((hero: Hero) => {
          return <HeroItem key={hero.id} hero={hero} />;
        })}
      </main>
      {/* TODO: create footer component */}
      <footer className="page-footer">
      </footer>
    </div>
  )
}

export default HeroesList;