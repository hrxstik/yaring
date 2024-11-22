import React from 'react';
import { About } from '../components/About';
import HouseInfo from '../components/BriefHouseInfo';
import Activities from '../components/Activities';
import Greeting from '../components/Greeting';
import { Questions } from '../components/Questions';

const Home = () => {
  return (
    <div className="home page">
      <Greeting />
      <About />
      <HouseInfo />
      <Activities />
      <Questions />
    </div>
  );
};

export default Home;
