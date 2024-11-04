import React from 'react';
import { Link } from 'react-router-dom';

const BookingButton = () => {
  return (
    <Link to="booking" className="button">
      <span>Выбрать даты</span>
    </Link>
  );
};

export default BookingButton;
