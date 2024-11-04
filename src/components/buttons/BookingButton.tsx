import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

const BookingButton: React.FC<Props> = ({ className }) => {
  return (
    <Link to="booking" className={className}>
      <span>Выбрать даты</span>
    </Link>
  );
};

export default BookingButton;
