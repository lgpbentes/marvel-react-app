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
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';

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
  const [totalResults, setTotalResults] = useState(0);
  const [countResults, setCountResults] = useState(0);
  const [favorites, setFavorites] = useState([] as Array<Hero>);
  const [currentQuery, setCurrentQuery] = useState(undefined);
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  async function getCharacters({ query, offset }: { query?: string, offset?: number }) {
    try {
      setIsLoading(true);
      const response = await CharactersApi.getCharacters({ query, offset: offset || 0 });
      const { total, count, results } = response.data;

      setHeroes(results);
      setTotalResults(total);
      setCountResults(count);
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
        <Logo styleType={'default'} />
        <h1 className="page-title">EXPLORE O UNIVERSO</h1>
        <p><strong className="page-info">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</strong></p>
      </header>
      <SearchInput queryParam={currentQuery} handleSubmit={(query: string) => {
        setShowOnlyFavs(false);
        setCurrentPage(1);
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
                <Switcher handleClick={handleOrderBy} />
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
          {showOnlyFavs
            ? <></>
            : <Pagination totalPages={Math.ceil(totalResults / 20)} currentPage={currentPage} handleClick={(page: number) => {
              setCurrentPage(page);
              getCharacters({ offset: (page - 1) * 20 });
            }} />}
        </>}
      </main>
      <Footer />
    </div>
  )
}

export default HeroesList;