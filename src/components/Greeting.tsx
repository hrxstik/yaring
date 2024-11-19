import React from 'react';
import BookingButton from './buttons/BookingButton';
import HousesButton from './buttons/HousesButton';

const Greeting = () => {
  return (
    <div className="bg-yaring-orange p-8">
      <div>
        <h3>База отдыха для всей семьи</h3>
        <h1 className="font-medium">Отдохните душой и телом</h1>
      </div>
      <div className="flex mt-4">
        <BookingButton className="secondary-button" />
        <HousesButton className="secondary-button" />
      </div>
    </div>
  );
};

export default Greeting;
