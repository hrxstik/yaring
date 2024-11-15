import React from 'react';
import BookingButton from './buttons/BookingButton';
import HousesButton from './buttons/HousesButton';

const Greeting = () => {
  return (
    <div className="bg-yaring-orange p-8">
      <h2>База отдыха для всей семьи</h2>
      <h1 className="font-medium">Отдохните душой и телом</h1>
      <div className="flex">
        <BookingButton className="secondary-button" />
        <HousesButton className="secondary-button" />
      </div>
    </div>
  );
};

export default Greeting;
