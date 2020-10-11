import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeroesList from './pages/HeroesList';
import HeroDetail from './pages/HeroDetail';

function Routes() {
  return (
    <BrowserRouter>
     <Route path="/" exact component={HeroesList} />
     <Route path="/detail/:id" exact component={HeroDetail} />
    </BrowserRouter>
  );
}

export default Routes;