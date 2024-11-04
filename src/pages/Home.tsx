import React from 'react';
import { About } from '../components/About';
import HouseInfo from '../components/HouseInfo';

const Home = () => {
  return (
    <div className="home page">
      <About />
      <HouseInfo />
    </div>
  );
};

export default Home;
