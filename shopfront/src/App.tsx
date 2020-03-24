import React from 'react';
import './App.scss';
import './bootstrap.min.css';

import ShopHeader from './components/ShopHeader'
import ShopBody from './components/ShopBody';
import ShopFooter from './components/ShopFooter';

function App() {
  return (
    <div className="App">
      <ShopHeader />
      <ShopBody />
      <ShopFooter />
    </div>
  );
}

export default App;