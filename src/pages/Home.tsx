import React from 'react';
import { About } from '../components/About';
import HouseInfo from '../components/HouseInfo';
import Activities from '../components/Activities';
import Greeting from '../components/Greeting';

const Home = () => {
  return (
    <div className="home page">
      <Greeting />
      <About />
      <HouseInfo />
      <Activities />
    </div>
  );
};

export default Home;
