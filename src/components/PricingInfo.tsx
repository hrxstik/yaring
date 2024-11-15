import React from 'react';
import BookingButton from './buttons/BookingButton';

interface Props {
  header: string;
  info: string;
  price: string;
  checkIn: string;
  checkOut: string;
}

const PricingInfo: React.FC<Props> = ({ header, info, price, checkIn, checkOut }) => {
  return (
    <div className="py-8 px-4 flex flex-col gap-4">
      <h2>{header}</h2>
      <p>{info}</p>
      <p className="font-medium">Цена от {price} руб./сутки</p>
      <div className="mt-5">
        <span className="mr-5 p-2 border-yaring-blue border rounded-lg">Заезд с {checkIn}</span>
        <span className="mr-5 p-2 border-yaring-blue border rounded-lg">Выезд до {checkOut}</span>
      </div>
      <BookingButton className="bg-yaring-orange text-white block max-w-fit py-2 px-8 rounded-lg" />
    </div>
  );
};

export default PricingInfo;
