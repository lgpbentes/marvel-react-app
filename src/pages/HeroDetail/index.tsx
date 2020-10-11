import React, { useState, useEffect } from 'react';

import { Hero } from '../../components/HeroItem';

import { CharactersApi } from '../../services/marvel-api';

import logoImage from '../../assets/images/logo/Group.png';
import heartIcon from '../../assets/images/icons/heart/Path.png';
import reviewImage from '../../assets/images/review/Group.png';
import videoIcon from '../../assets/images/icons/video/shape.svg';
import bookIcon from '../../assets/images/icons/book/Group.svg';

import './styles.css';

interface HeroDetailProps {
  match: {
    params: {
      id: number,
    };
  };
}

const HeroDetail: React.FC<HeroDetailProps> = (props) => {
  const [hero, setHero] = useState<Hero | undefined>(undefined);
  const [releases, setReleases] = useState<any>([]);

  async function getCharacterDetail(id: number) {
    const response = await CharactersApi.getCharacters({ id });
    const { results } = response.data;

    setHero(results[0]);
  }

  async function getCharacterReleases(id: number) {
    const response = await CharactersApi.getCharacterReleases({ id });
    const { results } = response.data;

    setReleases(results);
  }

  useEffect(() => {
    const { match: { params } } = props;

    getCharacterDetail(params.id);
    getCharacterReleases(params.id);
  }, [])

  return (
    <div id="page-hero-detail" className="container">
      {/* TODO: create header component */}
      <header className="page-header">
        <a href="/">
          <figure>
            <img src={logoImage} alt="Marvel Search Heros" />
          </figure>
        </a>
        <form id="search-form">
          <input type="search" placeholder="Procure por heróis" />
        </form>
      </header>
      <main>
        {
          hero ?
            <>
              <article className="hero-detail">
                <figure className="hero-image">
                  <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
                </figure>
                <section className="hero-info">
                  <div className="hero-title">
                    <span>{hero.name}</span>
                    <img src={heartIcon} alt='heart' />
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
            : <></>
        }
      </main>
      {/* TODO: create footer component */}
      <footer className="page-footer">
      </footer>
    </div>
  )
}

export default HeroDetail;