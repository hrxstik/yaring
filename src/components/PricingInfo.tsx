import React from 'react';
import BookingButton from './buttons/BookingButton';

interface Props {
  header: string;
  info: string;
  price: string;
  time: string;
  checkIn: string;
  checkOut: string;
  button: boolean;
}

const PricingInfo: React.FC<Props> = ({ header, info, price, time, checkIn, checkOut, button }) => {
  return (
    <div className="py-8 px-4 flex flex-col gap-4">
      <h2>{header}</h2>
      <p>{info}</p>
      <p className="font-medium">
        Цена от {price} руб./{time}
      </p>
      {checkIn && checkOut && (
        <div className="mt-5">
          <span className="mr-5 p-2 border-yaring-blue border rounded-lg">Заезд с {checkIn}</span>
          <span className="mr-5 p-2 border-yaring-blue border rounded-lg">Выезд до {checkOut}</span>
        </div>
      )}
      {button && <BookingButton className="primary-button" />}
    </div>
  );
};

export default PricingInfo;
