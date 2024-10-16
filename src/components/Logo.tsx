import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <div className="logo-image"></div>
      </Link>
    </div>
  );
};

export default Logo;
