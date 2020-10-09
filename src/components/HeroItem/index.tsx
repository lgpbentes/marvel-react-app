import React from 'react';

import heartIcon from '../../assets/images/icons/heart/Path.svg';

import './styles.css';

interface HeroThumbail {
  path: string;
  extension: string;
}

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: HeroThumbail;
}

interface HeroItemProps {
  hero: Hero;
}

const HeroItem: React.FC<HeroItemProps> = ({ hero }) => {
  
  return (
    <article className="hero-item">
      <figure>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
      </figure>

      <footer>
        <p>
          <strong>{hero.name}</strong>
        </p>
        <a 
          target="_blank" 
          onClick={() => {console.log('liked')}} 
          href={`https://google.com`}
        >
          <img src={heartIcon} alt="Favorito" />
        </a>
      </footer>
    </article>
  );
}

export default HeroItem;
