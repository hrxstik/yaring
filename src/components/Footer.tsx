import React from 'react';
import Navigation from './Navigation/Navigation';
import AdditionalInfo from './AdditionalInfo';

const Footer = () => {
  return (
    <div className="footer">
      <div className="page">
        <Navigation />
        <AdditionalInfo />
      </div>
    </div>
  );
};

export default Footer;
