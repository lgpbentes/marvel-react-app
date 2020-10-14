import React from 'react';

import logoImage from '../../assets/images/logo/MarvelLogo.svg';

import './styles.css';
import { Link } from 'react-router-dom';

interface LogoProps {
  styleType: string,
  handleClick?: Function
}

const Logo: React.FC<LogoProps> = ({ handleClick, styleType }) => {

  return (
    <Link to={'/'} style={{textDecoration: 'none'}}>
      <figure id="logo-wrapper" className={styleType ? styleType : 'default'}>
        <img src={logoImage} alt="Marvel Search Heroes" />
        <h1>Search heros</h1>
    </figure>
    </Link>
  );
}

export default Logo;
