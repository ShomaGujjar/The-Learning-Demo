import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import App from './components/app';
import ProductShow from './components/product_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductShow}/>
    <Route path ="/:slug" component={ProductShow} />
  </Route>
);
