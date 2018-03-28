import React from 'react';

import { HeaderWrapper } from '../styled/Scaffolding';
import GitHubRibbon from './GitHubRibbon';

const Header = () => (
  <HeaderWrapper>
    <GitHubRibbon
      color="white"
      link="http://github.com/blakeguilloud"
      position="right"
    />
    Flashcards
  </HeaderWrapper>
);

export default Header;