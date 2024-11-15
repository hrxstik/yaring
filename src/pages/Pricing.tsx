import React from 'react';
import HomeButton from '../components/buttons/HomeButton';
import ImageSlider from '../components/ImageSlider';
import PricingInfo from '../components/PricingInfo';

const Pricing = () => {
  return (
    <div className="pricing page ">
      <div className="grid grid-cols-2 grid-rows-1">
        <ImageSlider />
        <PricingInfo
          header="Треугольный домик 45 кв.м"
          info="
          На нашей территории находится четыре Треугольных домика
          A-Frame 45 кв.м. Домики совершенно одинаковые и отличаются только названиями: «Дубок», «Березка», «Рябинка», «Елочка». Наши лесные шале подходят для поездки одному, вдвоем, семьей или небольшой компанией до 4-х человек."
          price="7000"
          checkIn="14.00"
          checkOut="11.00"
        />
      </div>

      <HomeButton />
    </div>
  );
};

export default Pricing;
