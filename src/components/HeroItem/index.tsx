import React from 'react';
import { Link } from 'react-router-dom'

import heartIcon from '../../assets/images/icons/heart/Path.svg';

import './styles.css';

interface HeroThumbail {
  path: string;
  extension: string;
}

export interface Hero {
  id: number;
  name: string;
  modified: string;
  description: string;
  thumbnail: HeroThumbail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Array<object>;
    returned: number;
  };
  series: object;
  stories: {
    available: number;
    collectionURI: string;
    items: Array<object>;
    returned: number;
  };
  events: object;
  urls: Array<object>;
}

interface HeroItemProps {
  hero: Hero;
}

const HeroItem: React.FC<HeroItemProps> = ({ hero }) => {

  return (
    <Link to={`/detail/${hero.id}`} style={{ textDecoration: 'none' }}>
      <article className="hero-item" >
        <figure>
          <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
        </figure>

        <footer>
          <p>
            <strong>{hero.name}</strong>
          </p>
          {/* <a
          target="_blank"
          onClick={() => { console.log('liked') }}
          href={`https://google.com`}
        >
          <img src={heartIcon} alt="Favorito" />
        </a> */}
        </footer>
      </article>
    </Link>
  );
}

export default HeroItem;
