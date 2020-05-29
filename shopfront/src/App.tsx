import React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './bootstrap.min.css';

import ShopHeader from './components/ShopHeader'
import ShopBody from './components/ShopBody';
import ShopFooter from './components/ShopFooter';
import ProductShowroom from './components/ProductShowroom';

function App() {
  return (
    <div className="App">
      <ShopHeader />
        <HashRouter>
          <Switch>
            <Route path="/" exact component={ShopBody} />
            <Route path="/showroom/:prodId" component={ProductShowroom} />
          </Switch>
        </HashRouter>
      <ShopFooter />
    </div>
  );
}

export default App;