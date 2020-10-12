import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Hero } from '../../components/HeroItem';
import SearchInput from '../../components/SearchInput';

import { CharactersApi } from '../../services/marvel-api';

import { BsHeart, BsHeartFill } from 'react-icons/bs';

import logoImage from '../../assets/images/logo/Group.png';
import reviewImage from '../../assets/images/review/Group.png';
import videoIcon from '../../assets/images/icons/video/shape.svg';
import bookIcon from '../../assets/images/icons/book/Group.svg';

import './styles.css';
import Loading from '../../components/Loading';

interface HeroDetailProps {
  match: {
    params: {
      id: number,
    };
  };
}

const HeroDetail: React.FC<HeroDetailProps> = (props) => {
  const history = useHistory();

  const [hero, setHero] = useState<Hero | undefined>(undefined);
  const [releases, setReleases] = useState<any>([]);
  const [favorites, setFavorites] = useState([] as Array<Hero>);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getCharacterDetail(id: number) {
    try {
      setIsLoading(true);
      const response = await CharactersApi.getCharacters({ id });
      const { results } = response.data;

      setHero(results[0]);
    } catch (error) {
      alert('Algo deu errado!');
      setIsLoading(false);
    }

  }

  async function getCharacterReleases(id: number) {
    try {
      const response = await CharactersApi.getCharacterReleases({ id });
      const { results } = response.data;
      setReleases(results);
    } catch (error) {
      alert("Algo deu errado!");
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddFav(hero: Hero) {
    let favsArray = favorites;

    const favIndex = favsArray.findIndex((fav) => fav.id === hero.id)
    if (favIndex !== -1) {
      // hero already in list, we want to remove it
      setIsFav(false);
      favsArray.splice(favIndex, 1);
    } else {
      if (favorites.length < 5) {
        setIsFav(true);
        favsArray.push(hero);
      } else {
        alert('Você já possui 5 heróis marcados como favorito. Remova heróis da sua lista para adicionar novos.')
      }
    }

    setFavorites([...favsArray]);
    localStorage.setItem('favorites', JSON.stringify(favsArray));
  }

  useEffect(() => {
    const { match: { params } } = props;

    const storedFavs = JSON.parse(localStorage.getItem('favorites') || '0');
    if (storedFavs !== 0) {
      setFavorites([...storedFavs]);

      if (storedFavs.findIndex((fav: Hero) => `${fav.id}` === `${params.id}`) !== -1) {
        setIsFav(true);
      }
    }

    getCharacterDetail(params.id);
    getCharacterReleases(params.id);
  }, []);

  return (
    <div id="page-hero-detail" className="container">
      {/* TODO: create header component */}
      <header className="page-header">
        <a href="/">
          <figure>
            <img src={logoImage} alt="Marvel Search Heros" />
          </figure>
        </a>
        <SearchInput styleType={'detail'} handleSubmit={(query: string) => { history.push({ pathname: '/', state: { term: query } }) }} />
      </header>
      <main>
        {
          isLoading || hero === undefined
            ? <Loading />
            : <>
              <article className="hero-detail">
                <figure className="hero-image">
                  <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
                </figure>
                <section className="hero-info">
                  <div className="hero-title">
                    <span>{hero.name}</span>
                    <span>
                      {
                        isFav
                          ? <BsHeartFill style={{ color: 'red', fontSize: '3rem', cursor: "pointer" }} onClick={() => handleAddFav(hero)} />
                          : <BsHeart style={{ color: 'red', fontSize: '3rem', cursor: "pointer" }} onClick={() => handleAddFav(hero)} />
                      }
                    </span>
                  </div>

                  <p className="hero-description">{hero.description}</p>

                  <div className="hero-stats">
                    <div>
                      <p className="hero-stat-label"><strong>Quadrinhos</strong></p>
                      <div className="hero-stat">
                        <img src={bookIcon} alt={'book'} />
                        <span>{hero.comics.available}</span>
                      </div>
                    </div>
                    <div>
                      <p className="hero-stat-label"><strong>Estórias</strong></p>
                      <div className="hero-stat">
                        <img src={videoIcon} alt={'video'} />
                        <span>{hero.stories.available}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-rating">
                    <span><strong>Rating: </strong></span>
                    <img src={reviewImage} alt={'rating'} />
                  </div>
                  <div className="hero-last-release">
                    <span>
                      <strong>Último quadrinho: </strong>{new Date(hero.modified).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                </section>
              </article>
              <section className="hero-releases">
                <h1 >Últimos lançamentos</h1>
                <div className="hero-releases-list">
                  {releases.map((release: any) => {
                    return <article key={release.id} className="release-item">
                      <figure className="release-cover">
                        <img src={`${release.thumbnail.path}.${release.thumbnail.extension}`} alt={release.title} />
                      </figure>
                      <footer className="release-title">
                        <p>
                          <strong>{release.title}</strong>
                        </p>
                      </footer>
                    </article>;
                  })}
                </div>
              </section>
            </>
        }
      </main>
      {/* TODO: create footer component */}
      <footer className="page-footer">
      </footer>
    </div>
  )
}

export default HeroDetail;