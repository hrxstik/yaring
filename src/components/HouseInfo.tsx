import React from 'react';
import { useScroll } from './Navigation/ScrollContext';
import BookingButton from './buttons/BookingButton';
import HousesButton from './buttons/HousesButton';

const HouseInfo = () => {
  const { refs } = useScroll();
  return (
    <div ref={refs.houseInfo} className="grid grid-cols-2 blue-block" id="houseInfo">
      <section className="py-8 px-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Домики</h2>
        <p className="mb-6 text-white">
          Ваш идеальный уголок уединения и комфорта на природе. Погрузитесь в атмосферу уюта и стиля
          в нашем уникальном доме. С его характерной архитектурой и современными удобствами, этот
          дом станет идеальным местом для отдыха от повседневной суеты.
        </p>
        <div className="flex items-center">
          <BookingButton className="primary-button" />
          <HousesButton className="secondary-button" />
        </div>
      </section>
      <section className="py-8 px-8 text-xl">
        <ul className="list-disc list-inside mb-6 flex flex-col gap-4">
          <li>Современный ремонт</li>
          <li>Полностью оборудованная кухня</li>
          <li>Терраса для отдыха</li>
          <li>Проекторы в домах</li>
          <li>Кондиционер</li>
          <li>Зона для барбекю</li>
        </ul>
      </section>
    </div>
  );
};

export default HouseInfo;
