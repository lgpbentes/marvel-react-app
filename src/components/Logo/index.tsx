import React from 'react';

import logoImage from '../../assets/images/logo/MarvelLogo.svg';

import './styles.css';

interface LogoProps {
  styleType: string,
  handleClick?: Function
}

const Logo: React.FC<LogoProps> = ({ handleClick, styleType }) => {

  return (
    <figure id="logo-wrapper" className={styleType ? styleType : 'default'}>
        <img src={logoImage} alt="Marvel Search Heroes" />
        <h1>Search heros</h1>
    </figure>
  );
}

export default Logo;
