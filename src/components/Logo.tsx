import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/" className="logo">
        <div className="logo-image"></div>
        {/* <span>Яринг</span> */}
      </Link>
    </div>
  );
};

export default Logo;
