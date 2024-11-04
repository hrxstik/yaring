import React from 'react';
import HomeButton from './buttons/HomeButton';

const NotFoundBlock = () => {
  return (
    <div>
      <h1>
        <span>😯</span>
        Что-то пошло не так...
      </h1>
      <p>Вы попали на несуществующую страницу!</p>
      <HomeButton />
    </div>
  );
};

export default NotFoundBlock;
