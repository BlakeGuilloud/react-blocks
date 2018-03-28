import React, { Fragment } from 'react';

import Header from './Header';
import Card from './Card';
import { ContentWrapper } from '../styled/Scaffolding';
import data from '../data/CardData.json';

const App = () => (
  <Fragment>
    <Header />
    <ContentWrapper>
      {data.map(item => <Card key={item.id} {...item} />)}
    </ContentWrapper>
  </Fragment>
);

export default App;