import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeroesList from './pages/HeroesList';

function Routes() {
  return (
    <BrowserRouter>
     <Route path="/" exact component={HeroesList} />
    </BrowserRouter>
  );
}

export default Routes;