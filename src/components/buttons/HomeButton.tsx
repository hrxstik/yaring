import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/" className="home-button">
      <span>На главную</span>
    </Link>
  );
};

export default HomeButton;
