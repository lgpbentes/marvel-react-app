import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";

import HeroItem, { Hero } from '../../components/HeroItem';
import SearchInput from '../../components/SearchInput';

import { CharactersApi } from '../../services/marvel-api';

import logoImage from '../../assets/images/logo/Group.png';
import heroIcon from '../../assets/images/icons/heroi/superhero.png';
import heartIcon from '../../assets/images/icons/heart/Path.png';


import './styles.css';

interface HeroesListProps {
  location: {
    search: {
      query: string;
    };
  };
}

function useQuery() {
  return useLocation().state;
}

const HeroesList: React.FC<HeroesListProps> = () => {
  const queryParams : any = useQuery();
  const history = useHistory();

  const [heroes, setHeroes] = useState([]);
  const [totalResults, setTotalResults] = useState(undefined);

  async function getCharacters({ query }: { query?: string }) {

    const response = await CharactersApi.getCharacters({ query });
    const { total, count, results } = response.data;

    setHeroes(results);
    setTotalResults(count);
  }

  useEffect(() => {
    const params = {
      query: queryParams.term || undefined,
    };

    getCharacters(params);
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
      <SearchInput queryParam={queryParams.term || undefined} handleSubmit={(query: string) => { getCharacters({ query }) }} />

      <main>
        {totalResults
          ? <nav className="search-nav">
            <div className="total-results">
              <p>Encontrados {totalResults} heróis</p>
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
          : <></>
        }
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