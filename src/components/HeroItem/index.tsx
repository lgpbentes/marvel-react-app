import React from 'react';
import { Link } from 'react-router-dom'
import { BsHeart, BsHeartFill } from 'react-icons/bs';


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
  isFav: boolean;
  handleAddFav: Function;
}

const HeroItem: React.FC<HeroItemProps> = ({ hero, isFav, handleAddFav }) => {

  return (
    <article className="hero-item" >
      <Link to={`/detail/${hero.id}`} style={{ textDecoration: 'none' }}>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
      </Link>

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
        {
          isFav
            ? <BsHeartFill style={{ color: 'red', fontSize: '2rem', cursor: "pointer" }} onClick={() => handleAddFav(hero)} />
            : <BsHeart style={{ color: 'red', fontSize: '2rem', cursor: "pointer" }} onClick={() => handleAddFav(hero)} />
        }

      </footer>
    </article>
  );
}

export default HeroItem;
