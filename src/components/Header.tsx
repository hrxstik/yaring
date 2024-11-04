import React from 'react';
import Navigation from './Navigation/Navigation';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div className="header">
      <div className="page">
        <SocialLinks />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
