import React from 'react';

import GitHubRibbon from './GitHubRibbon';

const Header = () => (
  <div className="header">
    <GitHubRibbon
      color="white"
      link="http://github.com/blakeguilloud"
      position="right"
    />
    Flashcards
  </div>
);

export default Header;