import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import heartIcon from '../../assets/images/icons/heart/Path.svg';

import './styles.css';


interface SearchInputProps {
  queryParam?: string,
  styleType?: string,
  handleSubmit: Function
}

const SearchInput: React.FC<SearchInputProps> = ({ queryParam, styleType, handleSubmit }) => {
  const [query, setQuery] = useState('');

  return (
    <form id="search-form" onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(query);
    }}>
      <input type="search" className={styleType ? styleType : 'default'} placeholder="Procure por heróis" value={query} onChange={(e) => { setQuery(e.target.value) }} />
    </form>
  );
}

export default SearchInput;
