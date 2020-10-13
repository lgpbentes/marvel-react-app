import React, { useState, useEffect } from 'react';
import { useLocation, Switch } from "react-router-dom";
import { BsHeartFill } from 'react-icons/bs';

import HeroItem, { Hero } from '../../components/HeroItem';
import SearchInput from '../../components/SearchInput';
import Loading from '../../components/Loading';

import { CharactersApi } from '../../services/marvel-api';

import logoImage from '../../assets/images/logo/Group.png';
import heroIcon from '../../assets/images/icons/heroi/superhero.png';


import './styles.css';
import Switcher from '../../components/Switcher';
import Logo from '../../components/Logo';

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
  let queryParams: any = useQuery();

  const [heroes, setHeroes] = useState([] as Array<Hero>);
  const [totalResults, setTotalResults] = useState(undefined);
  const [favorites, setFavorites] = useState([] as Array<Hero>);
  const [currentQuery, setCurrentQuery] = useState(undefined);
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function getCharacters({ query }: { query?: string }) {
    try {
      setIsLoading(true);
      const response = await CharactersApi.getCharacters({ query });
      const { total, count, results } = response.data;

      setHeroes(results);
      setTotalResults(count);
    } catch (error) {
      alert('Algo deu errado!');
    } finally {
      setIsLoading(false);
    }

  }

  function addFav(hero: Hero) {
    let favsArray = favorites;

    const favIndex = favsArray.findIndex((fav) => fav.id === hero.id)
    if (favIndex !== -1) {
      // hero already in list, we want to remove it
      favsArray.splice(favIndex, 1);
    } else {
      if (favorites.length < 5) {
        favsArray.push(hero);
      } else {
        alert('Você já possui 5 heróis marcados como favorito. Remova heróis da sua lista para adicionar novos.')
      }
    }

    setFavorites([...favsArray]);
    localStorage.setItem('favorites', JSON.stringify(favsArray));
  }

  function handleOrderBy(onlyFavs: boolean) {
    setShowOnlyFavs(onlyFavs)

    if (onlyFavs) {
      setCurrentQuery(undefined);
      setHeroes(favorites);
    } else {
      getCharacters({});
    }
  }

  useEffect(() => {
    const queryParam = queryParams?.term || undefined;
    setCurrentQuery(queryParam);

    const storedFavs = JSON.parse(localStorage.getItem('favorites') || '0');
    if (storedFavs !== 0) {
      setFavorites([...storedFavs]);
    }

    getCharacters({ query: queryParam });
  }, []);

  return (
    <div id="page-heroes-list" className="container">
      <header className="page-header">
        <Logo styleType={'default'}/>
        <h1 className="page-title">EXPLORE O UNIVERSO</h1>
        <p><strong className="page-info">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</strong></p>
      </header>
      <SearchInput queryParam={currentQuery} handleSubmit={(query: string) => {
        setShowOnlyFavs(false);
        getCharacters({ query });
      }} />

      <main>
        {isLoading ? <Loading /> : <>
          {totalResults
            ? <nav className="search-nav">
              <div className="total-results">
                {
                  showOnlyFavs
                    ? <p>Encontrados {favorites.length} favoritos</p>
                    : <p>Encontrados {totalResults} heróis</p>

                }
              </div>
              <div className="order-by">
                <img src={heroIcon} alt={'hero'} />
                <p>Ordenar por nome - A/Z</p>
                <Switcher handleClick={handleOrderBy}/>
                <BsHeartFill style={{ color: 'red', fontSize: '3rem' }} />
                <p>Somente favoritos</p>
              </div>
            </nav>
            : <></>
          }
          <div className="heroes-list">
            {heroes.map((hero: Hero) => {
              return <HeroItem key={hero.id} hero={hero} isFav={favorites.findIndex((fav) => fav.id === hero.id) !== -1} handleAddFav={addFav} />;
            })}
          </div>
        </>}
      </main>
      {/* TODO: create footer component */}
      <footer className="page-footer">
      </footer>
    </div>
  )
}

export default HeroesList;