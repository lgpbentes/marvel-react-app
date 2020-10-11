import React, { useState, useEffect } from 'react';

import HeroItem, { Hero } from '../../components/HeroItem';

import { CharactersApi } from '../../services/marvel-api';

import logoImage from '../../assets/images/logo/Group.png';
import heroIcon from '../../assets/images/icons/heroi/superhero.png';
import heartIcon from '../../assets/images/icons/heart/Path.png';


import './styles.css';

function HeroesList() {
  const [heroes, setHeroes] = useState([]);

  async function getCharacters() {

    const response = await CharactersApi.getCharacters({});
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
      <form id="search-form">
        <input type="search" placeholder="Procure por heróis" />
      </form>
      <main>
        <nav className="search-nav">
          <div className="total-results">
            <p>Encontrados 20 heróis</p>
          </div>
          <div className="filters">
            <div className="order-by">
              <img src={heroIcon} alt={'hero'} />
              <p>Ordenar por nome - A/Z</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="filter-favs">
              <img src={heartIcon} alt={'heart'} />
              <p>Somente favoritos</p>
            </div>
          </div>
        </nav>
        <div className="heroes-list">
          {heroes.map((hero: Hero) => {
            return <HeroItem key={hero.id} hero={hero} />;
          })}
        </div>

      </main>
      {/* TODO: create footer component */}
      <footer className="page-footer">
      </footer>
    </div>
  )
}

export default HeroesList;