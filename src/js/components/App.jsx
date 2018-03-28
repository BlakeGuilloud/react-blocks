import React from 'react';

import Header from './Header';
import Card from './Card';
import data from '../data/CardData.json';

const App = () => (
  <div>
    <Header />
    <div className="content">
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  </div>
);

export default App;