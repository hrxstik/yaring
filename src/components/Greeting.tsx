import React from 'react';
import BookingButton from './buttons/BookingButton';
import HousesButton from './buttons/HousesButton';

const Greeting = () => {
  return (
    <div className="bg-yaring-orange p-8">
      <h2>Пум</h2>
      <h1>Пум2</h1>
      <div className="flex">
        <BookingButton className="secondary-button" />
        <HousesButton className="secondary-button" />
      </div>
    </div>
  );
};

export default Greeting;
